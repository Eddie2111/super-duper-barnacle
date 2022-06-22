/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
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
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
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
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createPersonal = /* GraphQL */ `
  mutation CreatePersonal(
    $input: CreatePersonalInput!
    $condition: ModelPersonalConditionInput
  ) {
    createPersonal(input: $input, condition: $condition) {
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
export const updatePersonal = /* GraphQL */ `
  mutation UpdatePersonal(
    $input: UpdatePersonalInput!
    $condition: ModelPersonalConditionInput
  ) {
    updatePersonal(input: $input, condition: $condition) {
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
export const deletePersonal = /* GraphQL */ `
  mutation DeletePersonal(
    $input: DeletePersonalInput!
    $condition: ModelPersonalConditionInput
  ) {
    deletePersonal(input: $input, condition: $condition) {
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
export const createProfessional = /* GraphQL */ `
  mutation CreateProfessional(
    $input: CreateProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    createProfessional(input: $input, condition: $condition) {
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
export const updateProfessional = /* GraphQL */ `
  mutation UpdateProfessional(
    $input: UpdateProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    updateProfessional(input: $input, condition: $condition) {
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
export const deleteProfessional = /* GraphQL */ `
  mutation DeleteProfessional(
    $input: DeleteProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    deleteProfessional(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
