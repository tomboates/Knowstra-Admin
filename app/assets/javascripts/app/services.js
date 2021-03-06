angular.module('admin.services', [])
.service('ParseService',
	function($http, $q) {

		this.createQuestion = function(question) {
			var d = $q.defer();

			$http({
				method: 'POST',
				url: '/create_question.json',
				data: question
			})
			.then(function(response) {
				d.resolve(response);
			},
			function(error) {
				d.reject(error);
			});

			return d.promise;
		}

		this.createAnswerForQuestion = function(answer, questionId, index, numAnswers) {
			var d = $q.defer();

			$http({
				method: 'POST',
				url: 'create_question_answers.json',
				data: {
					'answer' : answer,
					'questionId' : questionId,
					'answerIndex' : index,
					'numAnswers' : numAnswers
				}
			})
			.then(function(response) {
				d.resolve(response);
			},
			function(error) {
				d.reject(error);
			});

			return d.promise;
		}

		this.loginAdmin = function(username, password) {
			var d = $q.defer();

			$http({
				method: 'POST',
				url: 'admin_login.json',
				data: {'username' : username, 'password' : password}
			})
			.then(function(response) {
				d.resolve(response);
			}),
			function(error) {
				d.reject(error);
			}

			return d.promise;
		}

		this.getAllQuestions = function() {
			var d = $q.defer();

			$http({
				method: 'GET',
				url: 'create_question.json'
			})
			.then(function(response) {
				d.resolve(response);
			}),
			function(error) {
				d.reject(error);
			}

			return d.promise;
		}

		this.getAnswersForQuestion = function(questionId) {
			var d = $q.defer();

			$http({
				method: 'GET',
				url: 'create_question_answers.json',
				params: {'questionId' : questionId}
			})
			.then(function(response) {
				d.resolve(response);
			}),
			function(error) {
				d.reject(error);
			}

			return d.promise;
		}

		this.createUserAnswer = function(answer, answerId, questionId, numAnswers) {
			var d = $q.defer();

			$http({
				method: 'POST',
				url: 'create_user_answers.json',
				data: {
					'questionId' : questionId, 
					'answer' : answer, 
					'answerId' : answerId,
					'numAnswers' : numAnswers
				}
			})
			.then(function(response) {
				d.resolve(response);
			}),
			function(error) {
				d.reject(error);
			}

			return d.promise;
		}
	});
