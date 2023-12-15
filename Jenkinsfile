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

        stage('Run Tests') {
            steps {
                script {
                    // Run tests (replace with your test command)
                    sh 'npm version'
                }
            }
        }

        // stage('Build') {
        //     steps {
        //         script {
        //             // Your build steps here, e.g., npm run build
        //         }
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         script {
        //             // Your deployment steps here, e.g., deploy to a server
        //         }
        //     }
        // }
    }
}
