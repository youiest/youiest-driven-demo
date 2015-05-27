if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    "click select" : function(evt){
      // console.log()
      Session.set("language",evt.currentTarget.value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
     var googleSpreadSheetId = "1PoHE1IGgLMLbvRrHT3m0Ya4vnpWs58lnyr0dWH3-2E4";
      Meteor.setTimeout(function(){
        Language.init(googleSpreadSheetId);
        // console.log(Language.get("body.clickMe","hi"));
      },100);

  });
}
