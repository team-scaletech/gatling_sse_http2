var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "18314",
        "ok": "8314",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "62",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13050",
        "ok": "7322",
        "ko": "13050"
    },
    "meanResponseTime": {
        "total": "970",
        "ok": "106",
        "ko": "1688"
    },
    "standardDeviation": {
        "total": "2882",
        "ok": "241",
        "ko": "3745"
    },
    "percentiles1": {
        "total": "63",
        "ok": "64",
        "ko": "0"
    },
    "percentiles2": {
        "total": "66",
        "ok": "67",
        "ko": "1"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "280",
        "ko": "10000"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "1073",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8176,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 114,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10000,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "183.14",
        "ok": "83.14",
        "ko": "100"
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
        "total": "10000",
        "ok": "8314",
        "ko": "1686"
    },
    "minResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "13050",
        "ok": "7322",
        "ko": "13050"
    },
    "meanResponseTime": {
        "total": "1775",
        "ok": "106",
        "ko": "10005"
    },
    "standardDeviation": {
        "total": "3713",
        "ok": "241",
        "ko": "80"
    },
    "percentiles1": {
        "total": "65",
        "ok": "64",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "94",
        "ok": "67",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "280",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "1073",
        "ko": "10023"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8176,
    "percentage": 82
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 114,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1686,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "83.14",
        "ko": "16.86"
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
        "total": "8314",
        "ok": "0",
        "ko": "8314"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "330",
        "ok": "-",
        "ko": "330"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles1": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    },
    "percentiles4": {
        "total": "16",
        "ok": "-",
        "ko": "16"
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
    "count": 8314,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "83.14",
        "ok": "-",
        "ko": "83.14"
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
