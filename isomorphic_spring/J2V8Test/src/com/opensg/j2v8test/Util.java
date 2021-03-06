package com.opensg.j2v8test;

import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;

public class Util {
    public String getJSFileString(String path) throws IOException {
        InputStream in = getClass().getClassLoader().getResourceAsStream(path);
        Scanner scanner = new Scanner(in);
        scanner.useDelimiter(System.getProperty("line.separator")); 
        
        StringBuilder sb = new StringBuilder();
        while (scanner.hasNext()) {
        	sb.append(scanner.next() + "\n");
        }
        scanner.close();
        return sb.toString();
    }
}
