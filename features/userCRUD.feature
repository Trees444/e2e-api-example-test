Feature: User CRUD

  Scenario: User create
    When user create
    Then check that user was created

  Scenario: User update
    When user updated
    Then check that user was updated

  Scenario: Users list
    When get list of users
    Then check list of users

  Scenario: Single user
    When get single user
    Then check user information