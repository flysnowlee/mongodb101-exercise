{
    var db = connect('localhost/vcard');

    db.users.save({name: 'Fred', phone: '123-456-7890',email:'fred@mandice.com'});
    db.users.save({name: 'Hank', phone: '1321-000-6666',email:'hank@moko365.com'});
    db.users.save({name: 'Jollen', phone: '666-123-7890',email:'jollen@moko365.com'});

    print('0010-add-admin-users finished.')
}