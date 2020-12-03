$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test_Scripts/W_W_Test_Scripts.feature");
formatter.feature({
  "line": 1,
  "name": "Weight Watchers functionality test",
  "description": "",
  "id": "weight-watchers-functionality-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Weight Watchers Multiple functionality test",
  "description": "",
  "id": "weight-watchers-functionality-test;weight-watchers-multiple-functionality-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Open a dafault Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User in home weightwatchers page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that the loaded page title Contains Weight Loss",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Find a studio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify that loaded page title contains Meetings Near You",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters zip code as \"\u003cZipcode\u003e\" search for meetings In the search field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on arrow Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Print the title of the first result and the distance",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on the first search result",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Verify that displayed location name matches with the name of the first searched",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Print TODAYs hours of operation from this location page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User cloes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "weight-watchers-functionality-test;weight-watchers-multiple-functionality-test;",
  "rows": [
    {
      "cells": [
        "Zipcode"
      ],
      "line": 19,
      "id": "weight-watchers-functionality-test;weight-watchers-multiple-functionality-test;;1"
    },
    {
      "cells": [
        "10011"
      ],
      "line": 20,
      "id": "weight-watchers-functionality-test;weight-watchers-multiple-functionality-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Weight Watchers Multiple functionality test",
  "description": "",
  "id": "weight-watchers-functionality-test;weight-watchers-multiple-functionality-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Open a dafault Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User in home weightwatchers page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that the loaded page title Contains Weight Loss",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Find a studio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify that loaded page title contains Meetings Near You",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters zip code as \"10011\" search for meetings In the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on arrow Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Print the title of the first result and the distance",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on the first search result",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Verify that displayed location name matches with the name of the first searched",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Print TODAYs hours of operation from this location page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User cloes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Open_a_dafault_Browser()"
});
formatter.result({
  "duration": 20838112300,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-DE2HCH7D\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: driver.version: OperaDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:179)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:173)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:160)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:115)\r\n\tat com.ww.common.Common.getbrowser(Common.java:32)\r\n\tat com.ww.stepdef.Step_Def.user_Open_a_dafault_Browser(Step_Def.java:23)\r\n\tat ✽.Given User Open a dafault Browser(Test_Scripts/W_W_Test_Scripts.feature:5)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:2673/status] to be available after 20074 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:179)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:173)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:160)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:115)\r\n\tat com.ww.common.Common.getbrowser(Common.java:32)\r\n\tat com.ww.stepdef.Step_Def.user_Open_a_dafault_Browser(Step_Def.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 53 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Def.user_in_home_weightwatchers_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.verify_that_the_loaded_page_title_Contains_Weight_Loss()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_click_on_Find_a_studio()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.verify_that_loaded_page_title_contains_Meetings_Near_You()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10011",
      "offset": 25
    }
  ],
  "location": "Step_Def.user_enters_zip_code_as_search_for_meetings_In_the_search_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.click_on_arrow_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.print_the_title_of_the_first_result_and_the_distance()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_click_on_the_first_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Verify_that_displayed_location_name_matches_with_the_name_of_the_first_searched()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Print_TODAYs_hours_of_operation_from_this_location_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_cloes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});