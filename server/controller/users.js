const mongoose = require("mongoose");

const User = mongoose.model('User');

const Question = mongoose.model('Question');

module.exports = {

    login: (req, res) => {
		User.findOne({name: req.body.name})
			.then(user => {
				if(user){
					req.session.user = user
					res.json(true)
				} else {
					let new_user = new User({name: req.body.name, createdAt: new Date()})
					new_user.save()
						.then(() => {
							req.session.user = new_user
							res.json(true)
						})
						.catch(err => {
							console.log("User save error", err)
							res.status(500).json(err)
						})
				}
			})

		
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login')
    },

    addQuestion: (req , res) => {
        console.log('Inside question')
        console.log( req.body )
        let new_question = new Question(req.body)
        new_question.save()
            .then(() => { res.json(true) })
            .catch(err => {
            console.log("Question save error", err)
            res.status(400)
            res.json(false)
            })
       
    },

    getAllQuestons: ( req, res ) => {
        console.log('Inside question take all')
        Question.find()
        .then( (questions) =>  {
            arr = questions.slice(0,2)
            let data = {
                username : req.session.user.name,
                questions : questions
            }
            res.json(data)
        })
        .catch( err => console.log('All question err',err))
    },

    getAllUsers: (req , res) => {
    console.log('Inside user take all')
    User.find({}).sort('-percentage')
        .then( (users) =>  {
            console.log(users)
            res.json(users)
        })
        .catch( err => console.log('All user err',err))
    },

    update: (req, res) => {
        console.log(req.body)
        User.update({ _id :req.session.user._id }, req.body , function(err){
            if(err){
              console.log("failed")
              res.json()
            }else{
              console.log('success')
              res.json(true)
            }
          })
    }

}