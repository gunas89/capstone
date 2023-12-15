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
                    // withCredentials([string(credentialsId: 'd835b171-f7d1-41bb-ab61-60f83b5d3bc2', variable: 'DOCKER_HUB_CREDENTIAL')]) {
                        sh "docker login -u gunas89 -p GeekLion@123"
                        sh "docker build -t ${IMAGE_NAME} ."
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }
    }
}
