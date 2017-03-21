import React from 'react';
import {shallow, mount, render } from 'enzyme';
import ContactList from '../components/ContactList';
import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('ContactsApp Component Test suite', function() {
  var contacts = [
    { "name": "홍길동", "email": "gdhong@gmail.com" },
    { "name": "박문수", "email": "mspark@gmail.com" },
    { "name": "박명수", "email": "mspark@hotmail.com" }
  ];

  it('should render without throwing an error', function() {
      var contactList = mount(<ContactList contacts={contacts} filterText="" />);
      console.log(contactList.html());
      expect(contactList.children().first().text()).toEqual("홍길동 - gdhong@gmail.com");
  });


});

