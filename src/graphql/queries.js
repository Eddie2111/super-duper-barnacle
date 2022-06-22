/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      id
      name
      bucket
      key
      contentType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      serviceName
      firstname
      lastname
      email
      password
      personalInformation {
        details
        photo {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        address
        nidfront {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        nidback {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        service {
          serviceName
          firstname
          lastname
          email
          password
          personalInformation {
            details
            address
            id
            createdAt
            updatedAt
            personalServiceId
            owner
          }
          professionalInformation {
            plate
            specialize
            serviceName
            device
            yearsofExperience
            location
            photographyLocation
            id
            createdAt
            updatedAt
            professionalServiceId
            owner
          }
          id
          createdAt
          updatedAt
          servicePersonalInformationId
          serviceProfessionalInformationId
          owner
        }
        id
        createdAt
        updatedAt
        personalServiceId
        owner
      }
      professionalInformation {
        plate
        specialize
        serviceName
        device
        yearsofExperience
        location
        photographyLocation
        portfolioImages {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        service {
          serviceName
          firstname
          lastname
          email
          password
          personalInformation {
            details
            address
            id
            createdAt
            updatedAt
            personalServiceId
            owner
          }
          professionalInformation {
            plate
            specialize
            serviceName
            device
            yearsofExperience
            location
            photographyLocation
            id
            createdAt
            updatedAt
            professionalServiceId
            owner
          }
          id
          createdAt
          updatedAt
          servicePersonalInformationId
          serviceProfessionalInformationId
          owner
        }
        id
        createdAt
        updatedAt
        professionalServiceId
        owner
      }
      id
      createdAt
      updatedAt
      servicePersonalInformationId
      serviceProfessionalInformationId
      owner
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        serviceName
        firstname
        lastname
        email
        password
        personalInformation {
          details
          photo {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          address
          nidfront {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          nidback {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          personalServiceId
          owner
        }
        professionalInformation {
          plate
          specialize
          serviceName
          device
          yearsofExperience
          location
          photographyLocation
          portfolioImages {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          professionalServiceId
          owner
        }
        id
        createdAt
        updatedAt
        servicePersonalInformationId
        serviceProfessionalInformationId
        owner
      }
      nextToken
    }
  }
`;
export const getPersonal = /* GraphQL */ `
  query GetPersonal($id: ID!) {
    getPersonal(id: $id) {
      details
      photo {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
        owner
      }
      address
      nidfront {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
        owner
      }
      nidback {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
        owner
      }
      service {
        serviceName
        firstname
        lastname
        email
        password
        personalInformation {
          details
          photo {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          address
          nidfront {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          nidback {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          personalServiceId
          owner
        }
        professionalInformation {
          plate
          specialize
          serviceName
          device
          yearsofExperience
          location
          photographyLocation
          portfolioImages {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          professionalServiceId
          owner
        }
        id
        createdAt
        updatedAt
        servicePersonalInformationId
        serviceProfessionalInformationId
        owner
      }
      id
      createdAt
      updatedAt
      personalServiceId
      owner
    }
  }
`;
export const listPersonals = /* GraphQL */ `
  query ListPersonals(
    $filter: ModelPersonalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        details
        photo {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        address
        nidfront {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        nidback {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        service {
          serviceName
          firstname
          lastname
          email
          password
          personalInformation {
            details
            address
            id
            createdAt
            updatedAt
            personalServiceId
            owner
          }
          professionalInformation {
            plate
            specialize
            serviceName
            device
            yearsofExperience
            location
            photographyLocation
            id
            createdAt
            updatedAt
            professionalServiceId
            owner
          }
          id
          createdAt
          updatedAt
          servicePersonalInformationId
          serviceProfessionalInformationId
          owner
        }
        id
        createdAt
        updatedAt
        personalServiceId
        owner
      }
      nextToken
    }
  }
`;
export const getProfessional = /* GraphQL */ `
  query GetProfessional($id: ID!) {
    getProfessional(id: $id) {
      plate
      specialize
      serviceName
      device
      yearsofExperience
      location
      photographyLocation
      portfolioImages {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
        owner
      }
      service {
        serviceName
        firstname
        lastname
        email
        password
        personalInformation {
          details
          photo {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          address
          nidfront {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          nidback {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          personalServiceId
          owner
        }
        professionalInformation {
          plate
          specialize
          serviceName
          device
          yearsofExperience
          location
          photographyLocation
          portfolioImages {
            id
            name
            bucket
            key
            contentType
            createdAt
            updatedAt
            owner
          }
          service {
            serviceName
            firstname
            lastname
            email
            password
            id
            createdAt
            updatedAt
            servicePersonalInformationId
            serviceProfessionalInformationId
            owner
          }
          id
          createdAt
          updatedAt
          professionalServiceId
          owner
        }
        id
        createdAt
        updatedAt
        servicePersonalInformationId
        serviceProfessionalInformationId
        owner
      }
      id
      createdAt
      updatedAt
      professionalServiceId
      owner
    }
  }
`;
export const listProfessionals = /* GraphQL */ `
  query ListProfessionals(
    $filter: ModelProfessionalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessionals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        plate
        specialize
        serviceName
        device
        yearsofExperience
        location
        photographyLocation
        portfolioImages {
          id
          name
          bucket
          key
          contentType
          createdAt
          updatedAt
          owner
        }
        service {
          serviceName
          firstname
          lastname
          email
          password
          personalInformation {
            details
            address
            id
            createdAt
            updatedAt
            personalServiceId
            owner
          }
          professionalInformation {
            plate
            specialize
            serviceName
            device
            yearsofExperience
            location
            photographyLocation
            id
            createdAt
            updatedAt
            professionalServiceId
            owner
          }
          id
          createdAt
          updatedAt
          servicePersonalInformationId
          serviceProfessionalInformationId
          owner
        }
        id
        createdAt
        updatedAt
        professionalServiceId
        owner
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
