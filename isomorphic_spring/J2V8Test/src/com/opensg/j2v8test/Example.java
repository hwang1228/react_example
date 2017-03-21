package com.opensg.j2v8test;

import java.io.IOException;

import com.eclipsesource.v8.V8;
import com.eclipsesource.v8.V8Array;

public class Example {
	public static void main(String[] args) throws IOException {
		V8 v8 = V8.createV8Runtime();
		Util util = new Util();
		
//		String js = util.getJSFileString("js/hello.js");
//		v8.executeVoidScript(js);
//		V8Array parameters = new V8Array(v8).push("ȫ�浿");
//		String result = v8.executeStringFunction("render2", parameters);
//		System.out.println(result);
		
		String js = util.getJSFileString("js/bundle.js");
		v8.executeVoidScript(js);
		V8Array parameters = new V8Array(v8);
		String result = v8.executeStringFunction("renderGreet", parameters);
		System.out.println(result);
	}
}
