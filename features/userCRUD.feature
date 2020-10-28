Feature: User CRUD

  Scenario: User create
    When user create
    Then check that user was created

  Scenario: User update
    When user updated
    Then check that user was updated
