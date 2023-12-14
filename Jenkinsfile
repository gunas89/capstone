pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/gunas89/capstone.git', 
                    branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build . -t gunas89/test:latest'
            }
        }

        stage('Test image') {
            steps {
                echo 'testing…'
                sh 'docker inspect --type=image gunas89/test:latest'
            }
        }

        stage('Push') {
            steps {
                sh "docker login -u gunas89 -p GeekLion@123"
                sh 'docker push gunas89/test:latest'
            }
        }

        // stage('Deploy') {
        //     steps {
        //         echo 'deploying on another server'
        //         sh 'sudo docker stop nodetodoapp || true'
        //         sh 'sudo docker rm nodetodoapp || true'
        //         sh 'sudo docker run -d --name nodetodoapp -p 80:80 basanagoudapatil/nodo-todo-app-test:latest'
                
        //         sh '''
        //         ssh -i Ubuntudemo.pem -o StrictHostKeyChecking=no ubuntu@44.211.144.201 <<EOF
        //             sudo docker login -u basanagoudapatil -p dckr_pat_OvN0lH_USJztUCkm0opyjz-yXNc
        //             sudo docker pull basanagoudapatil/nodo-todo-app-test:latest
        //             sudo docker stop nodetodoapp || true
        //             sudo docker rm nodetodoapp || true
        //             sudo docker run -d --name nodetodoapp -p 8000:8000 basanagoudapatil/nodo-todo-app-test:latest
        //         EOF
        //         '''
        //     }
        // }
    }
}
