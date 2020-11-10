package com.backstage.api.controller;

import com.backstage.base.mapper.W2HMapper;
import com.backstage.base.models.W2H;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class hcontroller {
    @Autowired
    private W2HMapper w2hMapper;

    @RequestMapping("/5w2h")
    @ResponseBody
    public int add(@RequestBody W2H w2H){
         return w2hMapper.addw2h(w2H);

//        return "5w2h";//这一行，千万不要忘记，否则会报错
    }

}
