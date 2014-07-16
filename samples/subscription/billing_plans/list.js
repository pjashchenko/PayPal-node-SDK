/* Copyright 2014 PayPal */
"use strict";

var paypal_api = require('../../../');
require('../../configure');

var list_billing_plan = {
    'status': 'ACTIVE'
};

paypal_api.billing_plan.list(function (error, billingPlan) {
    if (error) {
        throw error;
    } else {
        console.log("List Billing Plans Response");
        console.log(JSON.stringify(billingPlan));
    }
});