pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS' // Set to the name of your Node.js installation in Jenkins
        PATH = "$NODEJS_HOME/bin:${env.PATH}"
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
                    withCredentials([string(credentialsId: 'dockerHub', variable: 'DOCKER_HUB_CREDENTIAL')]) {
                        sh "docker login -u username -p ${DOCKER_HUB_CREDENTIAL}"
                        sh "docker build -t ${IMAGE_NAME} ."
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }
    }
}
