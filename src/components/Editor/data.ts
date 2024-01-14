export const data = {
  java: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  csharp:
    'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
  javascript: "console.log('Hello, World!');",
  go: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
  python: 'print("Hello, World!")',
  php: '<?php\necho "Hello, World!";\n?>',
  ruby: "puts 'Hello, World!'",
  rust: 'fn main() {\n    println!("Hello, World!");\n}',
  solidity:
    'pragma solidity ^0.8.0;\n\ncontract HelloWorld {\n    function getMessage() public pure returns (string memory) {\n        return "Hello, World!";\n    }\n}',
  move: 'module  {\n    public 0x1::main;\n\n    public 0x1::main() {\n        0x1::HelloWorld();\n        return;\n    }\n\n    public 0x1::HelloWorld() {\n        // Print "Hello, World!"\n        0x1::0x1::DebugPrint("Hello, World!");\n        return;\n    }\n}',
  cairo: 'func main() {\n    dbg_print("Hello, World!");\n}',
};
