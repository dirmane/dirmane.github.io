import Component from "../../js/core/component.js";

const python = new Component(
  "article",
  "article",
  `<h1 id="title">Python</h1>
  <h2 id="learn-the-basics">Learn The Basics</h2><hr/>
  Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected
  <strong>Best free websites</strong> to learn : basic syntax, Variables, Conditionals, Exceptions, Functions, Lists and rest of the basic syntax are <a href="https://www.freecodecamp.org">FreeCodeCamp</a>, <a href="https://www.geeksforgeeks.org/python-programming-language/?ref=shm">geeksforgeeks</a> and official documentation of python <a href="https://www.python.org/">Python</a>
  <h3>Basic Syntax</h3>
  Setup the environment for python and get started with the basics.
  <h4>Variables</h4>
  Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.
  <div class='editor' dlang="python">  name = "Bob"
  Age = 54
  has_W2 = True
  print(name, Age, has_W2)
  // Bob 54 True</div>
  <h4>Conditionals</h4>
  Conditional Statements in Python perform different actions depending on whether a specific condition evaluates to <code>true</code> or <code>false</code>. Conditional Statements are handled by <code>IF-ELIF-ELSE</code> statements and <code>MATCH-CASE</code> statements in Python.
  <div class='editor'  dlang="python">
  if 0 < 1:                            # Truthy
...     print('yes')
  # yes
  </div>
  <h4>Typecasting</h4>
  The process of converting the value of one data type (integer, string, float, etc.) to another data type is called type conversion. Python has two types of type conversion: Implicit and Explicit.
  <h4>Functions</h4>
  In programming, a function is a reusable block of code that executes a certain functionality when it is called. Functions are integral parts of every programming language because they help make your code more modular and reusable.
  In Python, you define a function with the <code>def</code> keyword, then write the function identifier (name) followed by parentheses and a colon.
  <div dlang="python" class="editor">def all(iterable):
  for element in iterable:
      if not element:
          return False
  return True
</div>
<h4>Lists, Tuples, Sets, and Dictionaries</h4>
<span>
<strong>Lists</strong>: are just like dynamic sized arrays, declared in other languages (vector in C++ and ArrayList in Java). Lists need not be homogeneous always which makes it the most powerful tool in Python.
<br>
<strong>Tuple</strong>: A Tuple is a collection of Python objects separated by commas. In some ways, a tuple is similar to a list in terms of indexing, nested objects, and repetition but a tuple is immutable, unlike lists that are mutable.
<br>
<strong>Set</strong>: A Set is an unordered collection data type that is iterable, mutable, and has no duplicate elements. Python’s set class represents the mathematical notion of a set.
<br>
<strong>Dictionary</strong>: In python, Dictionary is an ordered (since Py 3.7) [unordered (Py 3.6 & prior)] collection of data values, used to store data values like a map, which, unlike other Data Types that hold only a single value as an element, Dictionary holds key:value pair. Key-value is provided in the dictionary to make it more optimized.
</span>
<h2 id='data-and-algo'>Data Structures and Algorithms</h2>
A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.
<h3>Arrays and Linked lists</h3>  
Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index. Linked lists are less rigid in their storage structure and elements are usually not stored in contiguous locations, hence they need to be stored with additional tags giving a reference to the next element. This difference in the data storage scheme decides which data structure would be more suitable for a given situation.
<h3>Heaps Stacks and Queues</h3> 
<strong>Stacks</strong>: Operations are performed LIFO (last in, first out), which means that the last element added will be the first one removed. A stack can be implemented using an array or a linked list. If the stack runs out of memory, it’s called a stack overflow.
<br>
<strong>Queue</strong>: Operations are performed FIFO (first in, first out), which means that the first element added will be the first one removed. A queue can be implemented using an array.
<br>
<strong>Heap</strong>: A tree-based data structure in which the value of a parent node is ordered in a certain way with respect to the value of its child node(s). A heap can be either a min heap (the value of a parent node is less than or equal to the value of its children) or a max heap (the value of a parent node is greater than or equal to the value of its children). 
<h3>Hash Tables</h3>
Hash Table, Map, HashMap, Dictionary or Associative are all the names of the same data structure. It is a data structure that implements a set abstract data type, a structure that can map keys to values.
<h3>Binary Search Trees</h3>  
A binary search tree, also called an ordered or sorted binary tree, is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree
<h3>Recursion</h3>  
Recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. Recursion solves such recursive problems by using functions that call themselves from within their own code.
<h3>Sorting Algorithms</h3> 
Sorting refers to arranging data in a particular format. Sorting algorithm specifies the way to arrange data in a particular order. Most common orders are in numerical or lexicographical order.

The importance of sorting lies in the fact that data searching can be optimized to a very high level, if data is stored in a sorted manner.
<h2 id="advanced">Advanced Topics</h2>
Now that you have covered the basics of Python, let's move on to some advanced topics. In this section, you will be learning about things like OOP, Lambdas, Decorators, Iterators, Modules, and more.
<h3>OOP</h3>
In Python, object-oriented Programming (OOPs) is a programming paradigm that uses objects and classes in programming. It aims to implement real-world entities like inheritance, polymorphisms, encapsulation, etc. in the programming. The main concept of OOPs is to bind the data and the functions that work on that together as a single unit so that no other part of the code can access this data.
<h4>Classes</h4>
A class is a user-defined blueprint or prototype from which objects are created. Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made. Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by their class) for modifying their state.
<div class='editor' dlang="python">
class ClassName:
    statement-1
    .
    .
    .
    statement-N</div>
<h4>Inheritance</h4>  
Inheritance allows us to define a class that inherits all the methods and properties from another class.
<h4>Methods and Dunder</h4>
A method in python is somewhat similar to a function, except it is associated with object/classes. Methods in python are very similar to functions except for two major differences.
<br>
<ul>
<li>The method is implicitly used for an object for which it is called</li>
<li>The method is accessible to data that is contained within the class.</li>
</ul>
<br>
Dunder or magic methods in Python are the methods having two prefix and suffix underscores in the method name. Dunder here means “Double Under (Underscores)”. These are commonly used for operator overloading. Few examples for magic methods are: <code>init</code>, <code>add</code>, <code>len</code>, <code>repr</code> etc.
<h3>Regular Expressions</h3>
A regular expression is a sequence of characters that specifies a search pattern in text. Usually such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation.
<div class='editor' dlang="python">m = re.search('(?<=abc)def', 'abcdef')
m.group(0)
</div>
<h3>Decorators</h3>
decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are usually called before the definition of a function you want to decorate.
<h3>Lambdas</h3>
Python Lambda Functions are anonymous function means that the function is without a name. As we already know that the def keyword is used to define a normal function in Python. Similarly, the lambda keyword is used to define an anonymous function in Python.
<h3>Modules</h3>

Modules refer to a file containing Python statements and definitions. A file containing Python code, for example: <code>example.py</code>, is called a module, and its module name would be example. We use modules to break down large programs into small manageable and organized files. Furthermore, modules provide reusability of code.
<h4>Buletin</h4>
Python interpreter has a number of built-in functions. They are always available for use in every interpreter session. Many of them have been discussed in previously. For example <code>print()</code> and <code>input()</code> for I/O, number conversion functions (<code>int()</code>, <code>float()</code>, <code>complex()</code>), data type conversions (<code>list()</code>, <code>tuple()>
</code>, <code>set()</code>) etc.
<h4>Custom Modules</h4>
Modules refer to a file containing Python statements and definitions. A file containing Python code, for example: <code>example.py</code>, is called a module, and its module name would be example. We use modules to break down large programs into small manageable and organized files. Furthermore, modules provide reusability of code.
<div class='editor' dlang="python">from fibo import fib, fib2
fib(500)
</div>
<h3>Package Managers</h3>
Package managers allow you to manage the dependencies (external code written by you or someone else) that your project needs to work correctly.
<h4>PyPI</h4>
PyPI, typically pronounced pie-pee-eye, is a repository containing several hundred thousand packages. These range from trivial Hello, World implementations to advanced deep learning libraries.
<h4>Pip</h4>
The standard package manager for Python is pip. It allows you to install and manage packages that aren’t part of the Python standard library.
<h2 id='l-a-f'>Python Frameworks</h2>
Frameworks automate the common implementation of common solutions which gives the flexibility to the users to focus on the application logic instead of the basic routine processes.

Frameworks make the life of web developers easier by giving them a structure for app development. They provide common patterns in a web application that are fast, reliable and easily maintainable.

<h2 id="links">Useful Links</h2>
<ul>
<li><a href='https://www.youtube.com/watch?app=desktop&v=8mAITcNt710&ab_channel=freeCodeCamp.org'>cs50 - Harvard's computer science course <strong>Bardzo polecam ;) <a href='https://cs50.harvard.edu/x/2022/'>Documentation</a></strong></li>
<li><a href="https://github.com/ossu/computer-science/blob/master/README.md">Full cs path</a></li>
</ul>


`
);

export { python };
