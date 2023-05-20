$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job search test",
  "description": "As a user I want to to test job search functionality on cv library site",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow,Greater London",
        "5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 20,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;2"
    },
    {
      "cells": [
        "Manual tester",
        "Central London",
        "5 miles",
        "30000",
        "40000",
        "Per annum",
        "Permanent",
        "Permanent Manual Tester jobs in Central London"
      ],
      "line": 21,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;3"
    },
    {
      "cells": [
        "IT Project Manager",
        "London",
        "7 miles",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent It Project Manager jobs in London"
      ],
      "line": 22,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;4"
    },
    {
      "cells": [
        "Software Tester",
        "Birmingham",
        "5 miles",
        "40000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent It Developer jobs in Birmingham"
      ],
      "line": 23,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "Bristol(County)",
        "5 miles",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Automation Tester jobs in Bristol (County)"
      ],
      "line": 24,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;6"
    },
    {
      "cells": [
        "Business analyst",
        "Cardiff",
        "5 miles",
        "30000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent Business Analyst jobs in Cardiff"
      ],
      "line": 25,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6784046300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"Harrow,Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent Tester jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2138858500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow,Greater London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 60732300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 88944000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 59851100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 78061000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 63871600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 78555500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 71620300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 70134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 2790877900,
  "status": "passed"
});
formatter.after({
  "duration": 581111000,
  "status": "passed"
});
formatter.before({
  "duration": 5411718400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Manual tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"Central London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent Manual Tester jobs in Central London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manual tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2083037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 56384800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 76373500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 61423900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 73450900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 59380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 78530800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 61724100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 76841400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Manual Tester jobs in Central London",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 2277315700,
  "status": "passed"
});
formatter.after({
  "duration": 592378600,
  "status": "passed"
});
formatter.before({
  "duration": 5355902900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"IT Project Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent It Project Manager jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT Project Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2080439600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 46559900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 70826800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 59512900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 82680400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 64696100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 70023800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 60443300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 77972600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent It Project Manager jobs in London",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 2947757800,
  "status": "passed"
});
formatter.after({
  "duration": 585866400,
  "status": "passed"
});
formatter.before({
  "duration": 5137384800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Software Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent It Developer jobs in Birmingham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2074875700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 53497500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 69019700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 57672500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 73690400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 64415800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 70372700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 60418400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 80744000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent It Developer jobs in Birmingham",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 5322868400,
  "error_message": "java.lang.AssertionError: expected [Permanent It Developer jobs in Birmingham] but found [Permanent Software Tester jobs in Birmingham]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat uk.co.library.cv.pages.ResultPage.verifyTheResults(ResultPage.java:25)\r\n\tat uk.co.library.cv.steps.JobSearchSteps.iVerifyResultText(JobSearchSteps.java:73)\r\n\tat ✽.And I verify result text \"Permanent It Developer jobs in Birmingham\"(jobsearch.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 696052400,
  "status": "passed"
});
formatter.before({
  "duration": 5078909700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Automation Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"Bristol(County)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent Automation Tester jobs in Bristol (County)\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2063041000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bristol(County)",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 49016100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 76397200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 63010200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 65198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 59213100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 72288900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 63050500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 76832600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in Bristol (County)",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 5060614200,
  "status": "passed"
});
formatter.after({
  "duration": 599369600,
  "status": "passed"
});
formatter.before({
  "duration": 5045773900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Business analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter location \"Cardiff\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary max \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify result text \"Permanent Business Analyst jobs in Cardiff\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business analyst",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2073927500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cardiff",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 48937400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 76668100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 56685900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 71388900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 64554800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 73118800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 61778500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 78834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Business Analyst jobs in Cardiff",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 2985173100,
  "status": "passed"
});
formatter.after({
  "duration": 575105500,
  "status": "passed"
});
});