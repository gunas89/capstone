pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS' // Set to the name of your Node.js installation in Jenkins
        PATH = "$NODEJS_HOME/bin:${env.PATH}"
        DOCKER_IMAGE = 'gunas89/test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Build') {
            steps {
                script {
                    // Run tests (replace with your test command)
                    sh 'npm version'
                    sh 'ls -ltr'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    // Build and push Docker image
                    withCredentials([string(credentialsId: 'db757c6f-ff70-4ad6-932b-32e72c90a742', variable: 'DOCKER_HUB_CREDENTIAL')]) {
                        sh "docker login -u gunas89 -p ${DOCKER_HUB_CREDENTIAL}"
                        sh "docker build -t ${IMAGE_NAME} ."
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }
    }
}
