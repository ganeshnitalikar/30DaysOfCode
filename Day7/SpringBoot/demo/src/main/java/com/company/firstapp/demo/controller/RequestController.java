package com.company.firstapp.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/request")
public class RequestController {

    @GetMapping("/process")
    public String processRequest(@RequestParam String param) {
        System.out.println("Received request with param: " + param);
        return "Processed request with param: " + param;
    }
}
