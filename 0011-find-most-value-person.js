{
    var db = connect('localhost/vcard');

    db.users.find({Age:{$gte:18,$lte:30}}).forEach(function(user) {
		print("id: " + user._id+ ", Name: " + user.Name+", Age: " + user.Age);

    	db.mvp.save({userId:user._id});
    });

    print("0011-find-most-value-person finished.");
}