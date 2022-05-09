package com.ricardo.control;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PointControl {

    @GetMapping("/point")
    public String point(Model model){
        return "point";
    }
}
