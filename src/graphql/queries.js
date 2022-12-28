/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubmits = /* GraphQL */ `
  query GetSubmits($id: ID!) {
    getSubmits(id: $id) {
      id
      title
      date
      time
      speakerDegree
      speakerTitleAndInstitution
      speakerFirstAndLastname
      contactPersonFirstAndLastName
      contactPersonEmail
      adminEmail
      sponsoringDepartmentOrganization
      phoneNumberMoreInfo
      isPublished
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSubmits = /* GraphQL */ `
  query ListSubmits(
    $filter: ModelSubmitsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        time
        speakerDegree
        speakerTitleAndInstitution
        speakerFirstAndLastname
        contactPersonFirstAndLastName
        contactPersonEmail
        adminEmail
        sponsoringDepartmentOrganization
        phoneNumberMoreInfo
        isPublished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubmits = /* GraphQL */ `
  query SyncSubmits(
    $filter: ModelSubmitsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubmits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        date
        time
        speakerDegree
        speakerTitleAndInstitution
        speakerFirstAndLastname
        contactPersonFirstAndLastName
        contactPersonEmail
        adminEmail
        sponsoringDepartmentOrganization
        phoneNumberMoreInfo
        isPublished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
