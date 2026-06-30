pipeline {

    agent any

    tools {
        nodejs "nodeJS"
    }

    environment {
        IMAGE_NAME = "react-crud"
        CONTAINER_NAME = "react-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/SpPrajapati12/SPCRUD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build React') {
            steps {
                bat '''
                set CI=false
                npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker run -d --name %CONTAINER_NAME% -p 3000:80 %IMAGE_NAME%
                '''
            }
        }

    }

    post {

        success {
            echo "Application deployed successfully."
        }

        failure {
            echo "Pipeline failed."
        }

    }

}