package sse_https;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;


public class ComputerDatabaseSimulation extends Simulation {


    SseMessageCheck sseCheck = sse.checkMessage("sse_check").matching(substring("Time"));
    ChainBuilder createClient =
        exec(sse("/event").connect("/events").await(1).on(sseCheck));

   
    ChainBuilder sendEvent =
        // Let's try at max 2 times
        tryMax(2)
            .on(
                exec(
                    http("/incoming")
                        .get("/incoming")
                )
                    .pause(1)
            )
            // If the chain didn't finally succeed, have the user exit the whole scenario
            .exitHereIfFailed();

    HttpProtocolBuilder httpProtocol =
        http.baseUrl("https://ec2-3-110-165-165.ap-south-1.compute.amazonaws.com:8443")
            .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
            .acceptLanguageHeader("en-US,en;q=0.5")
            .acceptEncodingHeader("gzip, deflate")
            .userAgentHeader(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0"
            );

    ScenarioBuilder users = scenario("Users").exec(createClient);

    {
        setUp(
            users.injectOpen(rampUsers(45000).during(90))
        ).protocols(httpProtocol);
    }
}
