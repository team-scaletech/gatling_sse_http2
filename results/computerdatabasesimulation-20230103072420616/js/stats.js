var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "5000"
    },
    "maxResponseTime": {
        "total": "5001",
        "ok": "120",
        "ko": "5001"
    },
    "meanResponseTime": {
        "total": "2534",
        "ok": "68",
        "ko": "5000"
    },
    "standardDeviation": {
        "total": "2466",
        "ok": "8",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2560",
        "ok": "67",
        "ko": "5000"
    },
    "percentiles2": {
        "total": "5000",
        "ok": "68",
        "ko": "5001"
    },
    "percentiles3": {
        "total": "5001",
        "ok": "74",
        "ko": "5001"
    },
    "percentiles4": {
        "total": "5001",
        "ok": "119",
        "ko": "5001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 100,
    "percentage": 50
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.105",
        "ok": "1.053",
        "ko": "1.053"
    }
},
contents: {
"req_-event-886bd": {
        type: "REQUEST",
        name: "/event",
path: "/event",
pathFormatted: "req_-event-886bd",
stats: {
    "name": "/event",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles2": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles3": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles4": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 100,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.053",
        "ok": "1.053",
        "ko": "-"
    }
}
    },"req_sse-check-890dd": {
        type: "REQUEST",
        name: "sse_check",
path: "sse_check",
pathFormatted: "req_sse-check-890dd",
stats: {
    "name": "sse_check",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "5000",
        "ok": "-",
        "ko": "5000"
    },
    "maxResponseTime": {
        "total": "5001",
        "ok": "-",
        "ko": "5001"
    },
    "meanResponseTime": {
        "total": "5000",
        "ok": "-",
        "ko": "5000"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5000",
        "ok": "-",
        "ko": "5000"
    },
    "percentiles2": {
        "total": "5001",
        "ok": "-",
        "ko": "5001"
    },
    "percentiles3": {
        "total": "5001",
        "ok": "-",
        "ko": "5001"
    },
    "percentiles4": {
        "total": "5001",
        "ok": "-",
        "ko": "5001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.053",
        "ok": "-",
        "ko": "1.053"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
