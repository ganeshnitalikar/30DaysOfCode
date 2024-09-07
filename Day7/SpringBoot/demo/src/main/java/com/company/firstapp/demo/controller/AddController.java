package com.company.firstapp.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddController {

    // Exposing the add method as an API
    @GetMapping("/add")
    public int add(@RequestParam int num1, @RequestParam int num2) {
        System.out.println("Incoming Values are " + "||num1: " + num1 + "|num2: " + num2);
        int sum = num1 + num2;
        System.out.println("Sum : " + sum);
        return sum;
    }
}
