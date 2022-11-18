pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    IMAGE_NAME = 'venkat/ci-cd-app'
    IMAGE_TAG = 'latest'
    APP_NAME = 'ci-cd-app'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
   
}