package com.ricardo.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainPageControl {

@GetMapping("/start")
public String mainPage(){
    return "mainPage";
}
}
