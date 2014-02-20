{
    var db = connect('localhost/vcard');

    db.message.save({message: 'Dennis C. Molina: “this product is really good for me”'});
    db.message.save({message: 'Xander A. Gordon: “can I can a red color one ?”'});
    db.message.save({message: 'Rana R. Molina: “can I buy 10 and get 1 for free ?”'});

    print('0012-post-message finished.')
}