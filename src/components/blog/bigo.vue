<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Introduction to Big "Oh" Notation</p>
                  <p style="font-size: 18px; padding: 0 !important; ">12 &#8226; 20 &#8226; 2021</p>
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#definitions">The Definitions</a></li>
                  <li>Examples</li>
                  <ul>
                     <li><a href="#on_functions">Implementing on Functions</a></li>
                     <li><a href="#on_algorithms">Implementing on Algorithms</a></li>
                  </ul>
                  <li><a href="#elefante">Analysis & Addressing the Elephant</a></li>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">Introduction</div>
            <p>
               <a href="https://en.wikipedia.org/wiki/Big_O_notation" target="_blank">"Big Oh"</a> notation provides a way to analyze an algorithm's runtime as the input for that algorithm increases.
               I refer to this relationship, an algorithm's runtime to the input size of said algorithm, when I talk about the <i>efficiency</i> of the algorithm. Fueled on pure intuition, it is natural to presume an algorithm
               to take increasingly longer to complete as the input gets progressively larger.
               <br>
               <br>
               Imagine a coworker walks up to you and says "Wanna bet lunch on whether you can find Waldo?" while waving around a single page. For the uninitiated, I'm referring to a popular
               children's book, which I just now discovered is called <a href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F#:~:text=Where's%20Wally%3F%20(called%20Where's%20Waldo,things%20at%20a%20given%20location." target="_blank">Where's Wally?</a>.
               Not a bad deal right? Happily obliging, your coworker then hands you the single page for you find Waldo. It only takes you a couple seconds to a couple minutes to locate him, and in-line with expectations your coworker now owes you a lunch.
               Your coworker then repeats themself, but this time waving no paper and upping the pot to a weeks' worth of lunch. Knowing you are about to get hustled but too curious to see your coworker's antics,
               you once again accept only to find them leaving the room and soon returning with a book on par to the size of <a href="https://en.wikipedia.org/wiki/List_of_longest_novels#List" target="_blank">Venmurasu</a> (a measly 22,000+ pages).
               Immediately resigning because of how long it would take to locate Waldo, the only feeling you are left with is how perturbed you are knowing your coworker owns a 22,000+ page <i>Where's Waldo</i> children's book.
               <br>
               <br>
               As humans (the algorithm), it is easy to scan a page (the input) and find solace in how quickly it will take you to complete a desired task. Notice though, how impractical it becomes for us as the page count
               gets larger. At some arbitrary page count, most people would not bother doing the task because it gets so ridiculous. This is exactly the discussion of "Big Oh" and <a href="https://en.wikipedia.org/wiki/Time_complexity" target="_blank">time complexity</a> for algorithms.
               Once again, these concepts provide a means to understand the asymptotic growth of functions/algorithms - the behavior of a function/algorithm as the input gets larger. Similar to the derivative, when we discuss "Big Oh", we are interested in the <i>rate of change</i>.
               I say this not to dismiss questions that ask specifically about a function's value at any point in it's domain, just to provide pedagogical "direction" for understanding "Big Oh". Asking for the values of an algorithm when fed an arbitrarily sized input is certainly valuable.
               For example if there are two competing algorithms with similar efficiency, an enticing question could be "at what point does algorithm <i>x</i> become more efficient than algorithm <i>y</i>?"
            </p>
            <div id="definitions"></div>
            <div id="blogSubHeader">
               The Definitions
            </div>
            <br>
            <br>
            <img id="img1000" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/bigo3.png" alt="">
            <span class="theme" style="font-size:14px; padding-top: -10px;">Visually, the graphs show that all points <i>n</i> beyond <vm :formula='`$n_0$`'></vm> adhere to the rules of their respective set.
            <i>(a)</i> shows <vm :formula='`$f(n) = O(g(n))$`'></vm> because <vm :formula='`$f(n) \\lt c \\cdot g(n)$`'></vm> at all points beyond <vm :formula='`$n_0$`'></vm> thus making <vm :formula='`$g(n)$`'></vm> an 
            <i>upper bound</i> of <vm :formula='`$f(n)$`'></vm>. <i>(b)</i> shows <vm :formula='`$f(n) = \\Omega(g(n))$`'></vm> because <vm :formula='`$f(n) \\gt c \\cdot g(n)$`'></vm>
            for all <i>n</i> points beyond <vm :formula='`$n_0$`'></vm>, making <vm :formula='`$g(n)$`'></vm> a <i>lower bound</i> of <vm :formula='`$f(n)$`'></vm>.
            <i>(c)</i> shows <vm :formula='`$f(n) = \\Theta(g(n))$`'></vm> because <vm :formula='`$c_2\\cdot g(n) \\lt f(n) \\lt c_1\\cdot g(n)$`'></vm> at all points beyond
            <vm :formula='`$n_0$`'></vm>. </span>
            <br>
            <p>
               (a) <vm :formula='bigoAssets.bigO'></vm> means <vm :formula='`$c \\cdot g(n)$`'></vm> is an <i>upper bound</i> on <vm :formula='`$f(n)$`'></vm>. Thus there exists
               some constant <i>c</i> such that <vm :formula='`$f(n)$`'></vm> is always <vm :formula='`$\\leq c \\cdot g(n)$`'></vm>, for large enough <vm :formula='`$n\\geq n_0$`'></vm>.
               <!-- We say a function <vm :formula='`$f(n)$`'></vm> belongs to "Big Oh" of the function g when <vm :formula='bigoAssets.bigO'></vm> -->
               <br>
               <br>
               (b) <vm :formula='bigoAssets.bigOmega'></vm> means <vm :formula='`$c \\cdot g(n)$`'></vm> is a <i>lower bound</i> on <vm :formula='`$f(n)$`'></vm>. Thus there exists
               some constant <i>c</i> such that <vm :formula='`$f(n)$`'></vm> is always <vm :formula='`$\\geq c \\cdot g(n)$`'></vm>, for large enough <vm :formula='`$n\\geq n_0$`'></vm>.
               <br>
               <br>
               (c) <vm :formula='bigoAssets.bigTheta'></vm> means <vm :formula='`$c_1 \\cdot g(n)$`'></vm> is an <i>upper bound</i> on <vm :formula='`$f(n)$`'></vm> and
               <vm :formula='`$c_2 \\cdot g(n)$`'></vm> is a <i>lower bound</i> on <vm :formula='`$f(n)$`'></vm>. Thus there exists constants <vm :formula='`$c_1$`'></vm>
               and <vm :formula='`$c_2$`'></vm> such that <vm :formula='`$c_2 \\cdot g(n) \\leq f(n) \\leq c_1\\cdot g(n) $`'></vm> for large enough <vm :formula='`$n\\geq n_0$`'></vm>.
               <br>
               <br>
               It is important to think of these functions as <i>boundaries</i> for <vm :formula='`$f(n)$`'></vm>. They demarcate, for <vm :formula='`$f(n)$`'></vm>, all values to
               the right of <vm :formula='`$n_0$`'></vm>. Another representation, using <vm :formula='`$O(g(n))$`'></vm>, in limit notation is:
            </p>
               <vm :formula='`$$\\lim_{n\\to\\infty}f(n) \\leq c \\cdot g(n), \\mathrm{\\;when\\;}n > n_0$$`'></vm>  
            <p>
               The picture and definitions are from <a href="https://www.algorist.com/" target="_blank">The Algorithm Design Manuel, by Steven Skiena</a> (p 35-36 of 2nd edition). Before we go through examples, a couple
               of things to note: 1) Some people consider <vm :formula='bigoAssets.bigO'></vm> to be an <a href="https://en.wikipedia.org/wiki/Big_O_notation#Equals_sign" target="_blank">abuse of notation</a> because we mean to say
               "<i>f(n)</i> is a member of set <i>O(g(n))</i>" which usually is represented in set notation as <vm :formula='`$f(x) \\in O(g(n))$`'></vm>. 2) It doesn't seem to be stated definitively
               in Skiena's book (or maybe I missed it), but it should seem apparent that <vm :formula="`$c > 0$`"></vm> otherwise we're subject to some funk. This is stated in
               <a href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" target="_blank">Introduction to Algorithms, 3rd Ed</a> on p. 50.
            </p>
            <div id="on_functions"></div>
            <div id="blogSubHeader">
               The Implementation on Functions
            </div>
            <p>
               Let's use the simple quadratic function <vm :formula='`$f(n) = n^2+4n$`'></vm> as an example  for now. I will be using 3 examples for <vm :formula='`$g(n)$`'></vm>
               where <vm :formula='`$n = n, n = n^2, n = n^3$`'></vm>. We can assert:
            </p>
            <div class="bgColor theme">
                  <br>
                  <vm class="theme" :formula='`$$g(n) = n$$`'></vm>
               <p>
                  <vm :formula='`$$f(n) = n^2+4n \\neq O(n)$$`'></vm> because there exists no constant <i>c</i> such that <vm :formula='`$f(n)$`'></vm>
                  is always <vm :formula='`$\\leq c \\cdot g(n)$`'></vm> for large enough <vm :formula='`$n\\geq n_0$`'></vm>. At no point, <vm :formula='`$n_0$`'></vm>, will <vm :formula='`$g(n)$`'></vm> always
                  be an <i>upper bound</i> of <vm :formula='`$f(n)$`'></vm>.
                  <br>
                  <br>
                  <vm :formula='`$$f(n) = n^2+4n = \\Omega(n)$$`'></vm> because there exists a constant, for example <vm :formula='`$c=5$`'></vm>, such that <vm :formula='`$f(n)$`'></vm>
                  is always <vm :formula='`$\\geq g(n)$`'></vm> when <vm :formula='`$n \\geq 5$`'></vm>. There exists a point, <vm :formula='`$n_0$`'></vm>, where <vm :formula='`$g(n)$`'></vm>
                  will always be a <i>lower bound</i> for <vm :formula='`$f(n)$`'></vm>. <a href="https://www.desmos.com/calculator/smr2bmhdew" target="_blank">Link</a> to graphing calculator for visualization.
                  Note I can pick <vm :formula='`$c=1$`'></vm> rendering this statement also true when <vm :formula='`$n \\geq 0$`'></vm>.
                  <br>
                  <br>
                  <vm :formula='`$$f(n) = n^2+4n \\neq \\Theta(n)$$`'></vm> because only <vm :formula='`$\\Omega$`'></vm> applies.
               </p>
            </div>
            <br>
            <div class="bgColor theme">
                  <br>
                  <vm class="theme" :formula='`$$g(n) = n^2$$`'></vm>
               <p>
                  <vm :formula='`$$f(n) = n^2+4n = O(n^2)$$`'></vm> because there exists a constant, for example <vm :formula='`$c=2$`'></vm>, such that <vm :formula='`$f(n) \\leq 2n^2$`'></vm>
                  for all <vm :formula='`$n \\geq 4$`'></vm>. <a href="https://www.desmos.com/calculator/csj6cj3d4z" target="_blank">Link</a> to graphing calculator mapping the two functions showing this.
                  Again, we can pick any value for <i>c</i>, what matters is that there is some <i>c</i> that satisfies to <vm :formula='`$O(g(n))$`'></vm>.
                  <br>
                  <br>
                  <vm :formula='`$$n^2+4n = \\Omega(n^2)$$`'></vm> because similarly to the above, we can pick <vm :formula='`$c = 1$`'></vm>, enabling <vm :formula='`$f(n) \\geq c\\cdot g(n)$`'></vm>
                  for all <vm :formula='`$n \\gt 0$`'></vm>.
                  <br>
                  <br>
                  <vm :formula='`$$n^2+4n = \\Theta(n^2)$$`'></vm> because both <vm :formula='`$O(n^2)$`'></vm> and <vm :formula='`$\\Omega(n^2)$`'></vm> hold true.  
               </p>
            </div>
            <br>
            <div class="bgColor theme">
                  <br>
                  <vm class="theme" :formula='`$$g(n) = n^3$$`'></vm>
                  <span class="theme" style='font-size: 13px;'><i>In plain English</i></span>
               <p>
                  <vm :formula='`$$f(n) = n^2+4n = O(n^3)$$`'></vm> because there exists coefficients, <i>c</i>, with corresponding points, <i>n sub 0</i>, where "<i>c</i> times g of n" will <b>always</b> be an
                  <i>upper bound</i> of "f of n" for all <i>n</i> greater than <i>n sub 0</i>.
                  <br>
                  <br>
                  <vm :formula='`$$n^2+4n \\neq \\Omega(n^3)$$`'></vm> because there exists <b>no</b> coefficients, <i>c</i>, with corresponding points, <i>n sub 0</i>, where "<i>c</i> times g of n"
                  will <b>always</b> be a <i>lower bound</i> of "f of n" for all <i>n</i> greater than <i>n sub 0</i>.
                  <br>
                  <br>
                  <vm :formula='`$$n^2+4n \\neq \\Theta(n^3)$$`'></vm> because only "Oh of n cubed" holds true. 
               </p>
            </div>
            <p>
               If you look at these examples long enough aided with some intuition - you may notice some "hints" to help determine which set(s) a function belongs to. A big hint, probably the biggest, is that
               the leading/highest degree term of the function is really what determines the outcome of the function. In <vm :formula='`$f(n) = n^2+4n$`'></vm>, <vm :formula='`$n^2$`'></vm>
               has the most impact to dictate <vm :formula='`$f(n)$`'></vm>'s membership. For <vm :formula='`$f(n)$`'></vm>, any
               <vm :formula='`$g(n)$`'></vm> whose leading term is less than degree 2 will be <i>dominated</i> by <vm :formula='`$f(n)$`'></vm>. The inverse is also true; for
               any <vm :formula='`$g(n)$`'></vm> where the leading term is higher than degree 2, we say <vm :formula='`$g(n)$`'></vm> <i>dominates</i> <vm :formula='`$f(n)$`'></vm>.
               A faster growing function dominates a slower growing one. If <vm :formula='`$g(n)$`'></vm> dominates <vm :formula='`$f(n)$`'></vm>, we can then assert that at some point
               <vm :formula='`$f(n) = O(g(n))$`'></vm> because <b>eventually</b>, regardless of other terms, there will be some point <vm :formula='`$n_0$`'></vm> such that every point thereafter
               <vm :formula='`$g(n) > f(n)$`'></vm>.
               <br>
               <br>
               Another observation is that <vm :formula='`$\\Theta$`'></vm> is the most restrictive set. <vm :formula='`$f(n)$`'></vm> must belong to both
               <vm :formula='`$O$`'></vm> and <vm :formula='`$\\Omega$`'></vm> for <vm :formula='`$f(n) = \\Theta$`'></vm>. Piggybacking on thoughts from the paragraph above,
               it becomes clear that <vm :formula='`$g(n)$`'></vm> must have matching degree to <vm :formula='`$f(n)$`'></vm> for <vm :formula='`$f(n) = \\Theta(g(n))$`'></vm>.
               Only then can we guarantee that at no point in the domain of <i>n</i>, <vm :formula='`$g(n)$`'></vm> will overtake <b>or</b> undertake <vm :formula='`$f(n)$`'></vm>.
               <br>
               <br>
               I use the terms <i>upper</i> and <i>lower bound</i> a lot. Some books define them more rigidly and call them the <i>asymptotic upper</i> and <i>asymptotic lower bound</i> - communication can wear many hats.
               One term I find useful is that when <vm :formula='`$f(n) = \\Theta(g(n))$`'></vm> we can say that <vm :formula='`$g(n)$`'></vm> is a <i>tight bound</i> for
               <vm :formula='`$f(n)$`'></vm>, indicating it is sandwiched between an upper and lower bound.
            </p>
            <div id="on_algorithms"></div>
            <div id="blogSubHeader">
               The Implementation on Algorithms
            </div>
            <p>
               We are now equipped with a robust understanding behind the operation of "Big Oh" notation when applied to polynomial functions. However the purpose is to have a means to use "Big Oh" on algorithms,
               so we need to provide a means to represent computer algorithms as math functions. In the paradigm of computer algorithms, the applications of "Big Oh" must err on the side of theory.
               The RAM, <i>Random Access Machine</i>, is a very simplified hypothetical computer with which brings considerations that allow
               us to represent algorithms mathematically and use "Big Oh" notation. Quoting Skiena (p. 31), these considerations are:
               <br>
               <br>
               <i>
                  &#8226; Each simple operation (+, *, -, =, if, call) takes exactly one time step
                  <br>
                  <br>
                  &#8226; Loops and subroutines are not considered simple operations. Instead, they
                  are the composition of many single-step operations. It makes no sense for
                  sort to be a single-step operation, since sorting 1,000,000 items will certainly
                  take much longer than sorting 10 items. The time it takes to run through a
                  loop or execute a subprogram depends upon the number of loop iterations or
                  the specific nature of the subprogram.
                  <br>
                  <br>
                  &#8226; Each memory access takes exactly one time step. Further, we have as much
                  memory as we need. The RAM model takes no notice of whether an item is
                  in cache or on the disk.   
               </i> 
            </p>
            <p>
               There is also an alternative description of the RAM on page 23 in <i>Introduction to Algorithms</i> linked above.
               With our hypothetical computer, we can now represent a simple algorithm as a function.
            </p>
            <prism-editor class="codeblock" v-model="bigoAssets.forLoop" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               Not bad right? Line 3 is constant no matter the size of our input <i>n</i> for algorithm <i>simple</i> so it is always equal to 1 time step.
               The for loop however is dependent on the size of input <i>n</i> because it runs exactly <i>n</i> times. Because of this, we multiply the inner operations, represented vaguely as (...), 
               by <i>n</i> so that when we put everything together we are provided with <i>1 + n(...)</i>. We can now see that this function belongs to <vm :formula='`$\\Theta(n)$`'></vm>.
               To be clear, this function doesn't really fit the definition of an algorithm, even if it's pseudocode, but that is okay. I just want to convey a very simple example of translating code into a function.
               <br>
               <br>
               I think it is a good habit declare an algorithm <vm :formula='`$\\Theta$`'></vm> when possible because it provides more information to the reader, however using
               <vm :formula='`$O$`'></vm> is also very fine because the <i>upper bound</i> is the primary interest. Just as many scientists seek to <a href="https://youtu.be/EYPapE-3FRw?t=226" target="_blank">prove theories wrong</a>,
               many algorists and computer scientists seek to understand the <i>worst case scenario</i> for algorithms. Nobody cares if an algorithm is working efficiently, people only care if an algorithm is working <i>inefficiently</i>.
               If an algorithm operates within an acceptable timeframe, we are content. It is only when an algorithm takes an obscene amount of time to complete we ask <i>"what the hell is going on?"</i>.
               Except for our primary interest being towards the <i>worst case scenario</i>, I say the things here somewhat jokingly, I just want to convey the significance. 
               Although I do recommend watching the video linked just above, even from the beginning; it is one of my favorites.
            </p>
            <p>
               Let us look at an actual algorithm, <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">insertion sort</a>:
            </p>
            <prism-editor class="codeblock" v-model="bigoAssets.insertionSort" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               Insertion sort is a very popular algorithm that, as it sounds, sorts a list/array (depending on what language you like) by the smallest value to the largest value. A top level understanding of how it
               works is that as the for loop iterates through a list, the while loop checks to see if the non-zero indexed value the for loop is on is less than the preceeding value in the list.
               If the while loop flags the preceeding value to be smaller than the non-zero indexed current value, it swaps the two values. This while loop continues, progressing to the beginning of the list, 
               until it it no longer flags truthy, thus terminating and proceeding to the next value in the for loop to begin again until the end of the list is reached.
               Let us decompose it and translate it to a math function using the considerations of our RAM computer.
            </p>
            <prism-editor class="codeblock" v-model="bigoAssets.insertionSort2" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               A little more complex than the previous simple algorithm! We conclude with the unrefined function <vm :formula='`$n(1+n(1+1))$`'></vm>. Here is a very specific explanation. Everything
               in the <i>insertionSort</i> algorithm occurs within a for loop that iterates <i>n</i> times (line 3). This is why everything in our polynomial is multiplied by the outermost <i>n</i>.
               One level into our for loop, we have a 
               simple initialization and a while loop (line 5 & 7 respectively). We know the initialization takes 1 time step, producing a 1 in our polynomial, but the while loop is a little trickier. So far, we have
               the partially translated function <vm :formula='`$n(1+\\mathtt{while})$`'></vm>, we need find a way to represent it functionally.
               <br>
               <br>
               As mentioned above, we are <b>primarily
               interested in the worst case scenario</b>; it is most desirable to understand how <i>inefficient</i> an algorithm can perform. So we will always assume the maximum amount of iterations possible for some loop
               because we can then safely and confidently assume that no matter what, every permutation of list input <i>n</i> (for insertion sort), if we were to use that as input, would be more efficient. Because of this philosophy, we acknowledge
               the maximum amount of times the while loop can iterate for is <i>n</i> times, as long as the list itself. Conceptually, this would require a list input <i>n</i> that is sorted in reverse order
               (biggest to smallest).
               <br>
               So both loops can be represented as <i>n</i>. Now look at everything that loops <i>n</i> times in our while loop, we have two operations that do not depend on the input size so they are represented as single step operations.
               This results in the function <vm :formula='`$n(1+n(1+1))$`'></vm>, which when simplified is equal to <vm :formula='`$2n^2+n$`'></vm>.
               <br>
               <br>
               To find a function's membership in the "Big Oh" family, we know, as stated above, always look at the leading term. Coefficients to the leading term are also irrelevant because, remember we can pick any <i>c</i> to satisfy set membership. For
               instance, if I want to show <vm :formula='`$f(n) = 2n^2+n = \\Theta(n^2)$`'></vm>, I pick <vm :formula='`$c_2 = 1$`'></vm> and
               <vm :formula='`$c_1 = 3$`'></vm> providing <vm :formula='`$1 \\cdot n^2 \\leq 2n^2 \\leq 3 \\cdot n^2$`'></vm> as required by the definition of <vm :formula='`$\\Theta$`'></vm>.
               And this is correct, we have now shown that a very real algorithm, insertion sort, is <vm :formula='`$\\Theta(n^2)$`'></vm> and <vm :formula='`$O(n^2)$`'></vm> on
               a <i>worst case scenario</i>. Food for thought though, what if input <i>n</i> is already perfectly sorted? If <i>n</i> were perfectly sorted from smallest to largest, then the while loop would never
               run, thus giving a lower bound, or <i>best case scenario</i> of <vm :formula='`$\\Omega(n)$`'></vm>.
            </p>
            <div id="elefante"></div>
            <div id="blogSubHeader">
               Analysis & Addressing the Elephant
            </div>
            <p>
               First analysis, then the elephant. So we've shown our insertion sort algorithm to be <vm :formula='`$\\Theta(n^2)$`'></vm>, now what? Well, what we have done is quantified the efficiency,
               within allowable tolerances, of the insertion sort algorithm. Now we can compare it to other algorithms to see how it stacks up against others. <a href="https://www.bigocheatsheet.com/">Bigocheatsheet</a>
               provides many resources to show just that. We can see that...well <vm :formula='`$O(n^2)$`'></vm> algorithms are classified as "horrible", meaning that as the input size <i>n</i> gets
               larger, the amount of operations required scales quadratically. If we have an input size of 10 for a <vm :formula='`$O(n^2)$`'></vm> algorithm, at worst that algorithm will require 100
               operations. If we have an input size of 1,000,000 (not unreasonable in the realm of computers), our <vm :formula='`$O(n^2)$`'></vm> algorithm will take 1,000,000,000,000 (a trillion)
               operations. In <a href="https://www.algorist.com/" target="_blank">Skiena's</a> book (p. 38), you can find an extremely helpful table that compares algorithm runtimes between each other. It is shown
               below.
            </p>
            <img id="img1000" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/bigoscaling.png" alt="">
            <p>
               Okay now the elephant. If you're already familiar with "Big Oh" or may have derived from the bigocheatsheet and table resources above, you will notice I only talk about a portion of the complexities.
               <vm :formula='`$O(n^2)$`'></vm> is certainly "horrible", but nowhere as horrible as <vm :formula='`$O(n!)$`'></vm> or <vm :formula='`$O(2^n)$`'></vm>.
               Just look at how bad they get on inputs of size 30 and 50 respectively. And what about <vm :formula='`$O(lg(n))$`'></vm>? What an insanely efficient runtime. I talk about why I omit them below,
               but the elephant is simply that I do not explain them at all here.
            </p>
            <div id="thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               For the complexities I don't talk about here, I would like to provide algorithms that represent these complexities their own blog. This is because algorithms that belong to for example,
               <vm :formula='`$O(nlg(n))$`'></vm>, are frequently shown with recursion - a procedure I think warrants a decently "in depth" discussion on it's own. 
               <br>
               <br>
               There are also other notations <vm :formula='`$o(n)$`'></vm> and <vm :formula='`$\\omega(n)$`'></vm> that I don't mention. It was kinda funny seeing <vm :formula='`$o(n)$`'></vm>
               again after using it for differentiating the quadratic form. My goal for this blog was to introduce a well grounded but simple enough explanation to "Big Oh" notation and I think everything I mentioned and did not
               mention provides a nice balance between "enough detail to conveniently understand it" and "too much detail, where's my notebook?!".
            </p>
            <p>
               Ryan
            </p>
         </div>
         <toTop />
         <themeSwitch />
   </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></script>
<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'
import bigojs from './assets/bigo.js'


export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch,
      PrismEditor,
      'vm': VueMathjax
      // MathJax
   },
   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         {
            name: 'description',
            content: `A beginners introduction to Big "Oh" notation and time complexity. Understanding how asymptotic growth represents algorithm efficiency while providing examples in math, code, and *literally* plain english to aid intuition.`
         },
         {
            name: 'keywords',
            content: 'big oh, big o, big omega, big theta, algorithms, time complexity, asymptotic growth, functions, efficiency, code, dev, introductory, beginner'
         },
         {
            property: 'og:description',
            content: `A beginners introduction to Big "Oh" notation and time complexity. Understanding how asymptotic growth represents algorithm efficiency while providing examples in math, code, and *literally* plain english to aid intuition.`
         },
         
      ],
      link: [
         {
            rel: 'canonical',
            href: 'https://ryli.design/blog/bigo'
         }
      ]
   },
   data() {
      return {
         bigoAssets: bigojs,
      }
   },
   
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      },

      imageZoom(event) {
         // https://stackoverflow.com/questions/53737648/how-get-clicked-item-in-vue
         event.target.classList.toggle('scaledUp')
      }
   },

   mounted () {
      window.MathJax.Hub.Config({
         tex2jax: {
            inlineMath: [['$','$']],
            displayMath: [['$$', '$$']],
            skipStartupTypeset: true,
            processEscapes: true,
            processEnvironments: true
         }
      });
   } 
}
</script>

<style scoped src='./css/blog.css'>
</style>