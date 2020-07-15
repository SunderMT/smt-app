pipeline {
    agent any 
    stages {
        stage('Pull') { 
            steps {
                sh 'rm -rf smt-app && git clone -b master https://github.com/SunderMT/smt-app.git'
            }
        }
        stage('Install') { 
            steps {
                sh 'cd smt-app/smt-app && npm install'
            }
        }
        stage('Run Test') { 
            steps {
                sh 'cd smt-app/smt-app && npm test'
            }
        }
        stage('Build') { 
            steps {
                sh 'cd smt-app/smt-app && ng build --prod'
            }
        }
        stage('Deploy Build') { 
            steps {
                sh 'cd smt-app/smt-app && rm -rf /var/www/* && mv dist/smt-app /var/www'
            }
        }
    }
}
