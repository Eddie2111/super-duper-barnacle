/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($owner: String) {
    onCreateS3Object(owner: $owner) {
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
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($owner: String) {
    onUpdateS3Object(owner: $owner) {
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
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($owner: String) {
    onDeleteS3Object(owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($owner: String) {
    onCreateService(owner: $owner) {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($owner: String) {
    onUpdateService(owner: $owner) {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($owner: String) {
    onDeleteService(owner: $owner) {
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
export const onCreatePersonal = /* GraphQL */ `
  subscription OnCreatePersonal($owner: String) {
    onCreatePersonal(owner: $owner) {
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
export const onUpdatePersonal = /* GraphQL */ `
  subscription OnUpdatePersonal($owner: String) {
    onUpdatePersonal(owner: $owner) {
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
export const onDeletePersonal = /* GraphQL */ `
  subscription OnDeletePersonal($owner: String) {
    onDeletePersonal(owner: $owner) {
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
export const onCreateProfessional = /* GraphQL */ `
  subscription OnCreateProfessional($owner: String) {
    onCreateProfessional(owner: $owner) {
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
export const onUpdateProfessional = /* GraphQL */ `
  subscription OnUpdateProfessional($owner: String) {
    onUpdateProfessional(owner: $owner) {
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
export const onDeleteProfessional = /* GraphQL */ `
  subscription OnDeleteProfessional($owner: String) {
    onDeleteProfessional(owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
