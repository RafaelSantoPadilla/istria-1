const express = require('express');
const path = require('path');
const fs = require('fs');

const controller = {
    index: (req, res) => {
        res.render('index/index')
    
    }
    
}

module.exports = controller;