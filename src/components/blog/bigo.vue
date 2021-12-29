<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Introduction to Big "Oh" Notation</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">12 &#8226; 20 &#8226; 2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               <a href="https://en.wikipedia.org/wiki/Big_O_notation">"Big Oh"</a> notation provides a way to analyze an algorithm's runtime as the input for that algorithm increases.
               I refer to this relationship, an algorithm's runtime and the input size of said algorithm, when I talk about the <i>efficiency</i> of the algorithm. Fueled on pure intuition, it is natural to presume an algorithm
               to take increasingly longer to complete as the input gets progressively larger.
               <br>
               <br>
               Imagine a coworker walks up to you and says "Wanna bet lunch on whether you can find Waldo?" while waving around a single page. For the uninitiated, I'm referring to a popular
               children's book, which I just now discovered is called <a href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F#:~:text=Where's%20Wally%3F%20(called%20Where's%20Waldo,things%20at%20a%20given%20location.">Where's Wally?</a>.
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
            <div id="blogSubHeader">
               The Definitions
            </div>
            <br>
            <br>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/bigo3.png" alt="">
            <span style="font-size:14px; padding-top: -10px;">Visually, the graphs show that all points <i>n</i> beyond <vue-mathjax :formula='`$n_0$`'></vue-mathjax> adhere to the rules of their respective set.
            <i>(a)</i> shows <vue-mathjax :formula='`$f(n) = O(g(n))$`'></vue-mathjax> because <vue-mathjax :formula='`$f(n) \\lt c \\cdot g(n)$`'></vue-mathjax> at all points beyond <vue-mathjax :formula='`$n_0$`'></vue-mathjax> thus making <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> an 
            <i>upper bound</i> of <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. <i>(b)</i> shows <vue-mathjax :formula='`$f(n) = \\Omega(g(n))$`'></vue-mathjax> because <vue-mathjax :formula='`$f(n) \\gt c \\cdot g(n)$`'></vue-mathjax>
            for all <i>n</i> points beyond <vue-mathjax :formula='`$n_0$`'></vue-mathjax>, making <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> a <i>lower bound</i> of <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>.
            <i>(c)</i> shows <vue-mathjax :formula='`$f(n) = \\Theta(g(n))$`'></vue-mathjax> because <vue-mathjax :formula='`$c_2\\cdot g(n) \\lt f(n) \\lt c_1\\cdot g(n)$`'></vue-mathjax> at all points beyond
            <vue-mathjax :formula='`$n_0$`'></vue-mathjax>. </span>
            <br>
            <p>
               (a) <vue-mathjax :formula='bigO'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\leq c \\cdot g(n)$`'></vue-mathjax>, for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <!-- We say a function <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> belongs to "Big Oh" of the function g when <vue-mathjax :formula='bigO'></vue-mathjax> -->
               <br>
               <br>
               (b) <vue-mathjax :formula='bigOmega'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is a <i>lower bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\geq c \\cdot g(n)$`'></vue-mathjax>, for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <br>
               <br>
               (c) <vue-mathjax :formula='bigTheta'></vue-mathjax> means <vue-mathjax :formula='`$c_1 \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> and
               <vue-mathjax :formula='`$c_2 \\cdot g(n)$`'></vue-mathjax> is a <i>lower bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists constants <vue-mathjax :formula='`$c_1$`'></vue-mathjax>
               and <vue-mathjax :formula='`$c_2$`'></vue-mathjax> such that <vue-mathjax :formula='`$c_2 \\cdot g(n) \\leq f(n) \\leq c_1\\cdot g(n) $`'></vue-mathjax> for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <br>
               <br>
               It is important to think of these functions as <i>boundaries</i> for <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. They demarcate, for <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>, all values to
               the right of <vue-mathjax :formula='`$n_0$`'></vue-mathjax>. Another representation, using <vue-mathjax :formula='`$O(g(n))$`'></vue-mathjax> for example, could be limit notation shown as:
               <vue-mathjax :formula='`$$\\lim_{n\\to\\infty}f(n) \\leq c \\cdot g(n), \\mathrm{\\;when\\;}n > n_0$$`'></vue-mathjax>  
            </p>
            <p>
               The picture and definitions are from <a href="https://www.algorist.com/" target="_blank">The Algorithm Design Manuel, by Steven Skiena</a> (p 35-36 of 2nd edition). Before we go through examples, a couple
               of things to note: 1) Some people consider <vue-mathjax :formula='bigO'></vue-mathjax> to be an <a href="https://en.wikipedia.org/wiki/Big_O_notation#Equals_sign" target="_blank">abuse of notation</a> because we mean to say
               "<i>f(n)</i> is a member of set <i>O(g(n))</i>" which usually is represented in set notation as <vue-mathjax :formula='`$f(x) \\in O(g(n))$`'></vue-mathjax>. 2) It doesn't seem to be stated definitively
               in Skiena's book (or maybe I missed it), but it should seem apparent that <vue-mathjax :formula="`$c > 0$`"></vue-mathjax> otherwise we're subject to some funk. This is stated in
               <a href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" target="_blank">Introduction to Algorithms, 3rd Ed</a> on p. 50.
            </p>
            <div id="blogSubHeader">
               The Implementation on Functions
            </div>
            <p>
               Let's use the simple quadratic function <vue-mathjax :formula='`$f(n) = n^2+4n$`'></vue-mathjax> as an example  for now. I will be using 3 examples for <vue-mathjax :formula='`$g(n)$`'></vue-mathjax>
               where <vue-mathjax :formula='`$n = n, n = n^2, n = n^3$`'></vue-mathjax> We can assert:
            </p>
            <div class="bgColor">
                  <br>
                  <vue-mathjax :formula='`$$g(n) = n$$`'></vue-mathjax>
               <p>
                  <vue-mathjax :formula='`$f(n) = n^2+4n \\neq O(n)$`'></vue-mathjax>, because there exists no constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>
                  is always <vue-mathjax :formula='`$\\leq c \\cdot g(n)$`'></vue-mathjax> for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>. At no point, <vue-mathjax :formula='`$n_0$`'></vue-mathjax>, will <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> always
                  be an <i>upper bound</i> of <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$f(n) = n^2+4n = \\Omega(n)$`'></vue-mathjax>, because there exists a constant, for example <vue-mathjax :formula='`$c=5$`'></vue-mathjax>, such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>
                  is always <vue-mathjax :formula='`$\\geq g(n)$`'></vue-mathjax> when <vue-mathjax :formula='`$n \\geq 5$`'></vue-mathjax>. There exists a point, <vue-mathjax :formula='`$n_0$`'></vue-mathjax>, where <vue-mathjax :formula='`$g(n)$`'></vue-mathjax>
                  will always be a <i>lower bound</i> for <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. <a href="https://www.desmos.com/calculator/smr2bmhdew" target="_blank">Link</a> to graphing calculator for visualization.
                  Note I can pick <vue-mathjax :formula='`$c=1$`'></vue-mathjax> rendering this statement also true when <vue-mathjax :formula='`$n \\geq 0$`'></vue-mathjax>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$f(n) = n^2+4n \\neq \\Theta(n)$`'></vue-mathjax> because only <vue-mathjax :formula='`$\\Omega$`'></vue-mathjax> applies.
               </p>
            </div>
            <br>
            <div class="bgColor">
                  <br>
                  <vue-mathjax :formula='`$$g(n) = n^2$$`'></vue-mathjax>
               <p>
                  <vue-mathjax :formula='`$f(n) = n^2+4n = O(n^2)$`'></vue-mathjax>, because there exists a constant, for example <vue-mathjax :formula='`$c=2$`'></vue-mathjax>, such that <vue-mathjax :formula='`$f(n) \\leq 2n^2$`'></vue-mathjax>
                  for all <vue-mathjax :formula='`$n \\geq 4$`'></vue-mathjax>. <a href="https://www.desmos.com/calculator/csj6cj3d4z" target="_blank">Link</a> to graphing calculator mapping the two functions showing this.
                  Again, we can pick any value for <i>c</i>, what matters is that there is some <i>c</i> that satisfies to <vue-mathjax :formula='`$O(g(n))$`'></vue-mathjax>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$n^2+4n = \\Omega(n^2)$`'></vue-mathjax>, because similarly to the above, we can pick <vue-mathjax :formula='`$c = 1$`'></vue-mathjax>, enabling <vue-mathjax :formula='`$f(n) \\geq c\\cdot g(n)$`'></vue-mathjax>
                  for all <vue-mathjax :formula='`$n \\gt 0$`'></vue-mathjax>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$n^2+4n = \\Theta(n^2)$`'></vue-mathjax>, because both <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> and <vue-mathjax :formula='`$\\Omega(n^2)$`'></vue-mathjax> hold true.  
               </p>
            </div>
            <br>
            <div class="bgColor">
                  <br>
                  <vue-mathjax :formula='`$$g(n) = n^3$$`'></vue-mathjax>
                  <br>
                  <span style='font-size: 13px;'><i>In plain English</i></span>
               <p>
                  <vue-mathjax :formula='`$f(n) = n^2+4n = O(n^3)$`'></vue-mathjax>, because there exists coefficients, <i>c</i>, with corresponding points, <i>n sub 0</i>, where "<i>c</i> times g of n" will <b>always</b> be an
                  <i>upper bound</i> of "f of n" for all <i>n</i> greater than <i>n sub 0</i>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$n^2+4n \\neq \\Omega(n^3)$`'></vue-mathjax>, because there exists <b>no</b> coefficients, <i>c</i>, with corresponding points, <i>n sub 0</i>, where "<i>c</i> times g of n"
                  will <b>always</b> be a <i>lower bound</i> of "f of n" for all <i>n</i> greater than <i>n sub 0</i>.
                  <br>
                  <br>
                  <vue-mathjax :formula='`$n^2+4n \\neq \\Theta(n^3)$`'></vue-mathjax>, because only "Oh of n cubed" holds true. 
               </p>
            </div>
            <p>
               If you look at these examples long enough aided with some intuition - you may notice some "hints" to help determine which set(s) a function belongs to. A big hint, probably the biggest, is that
               the leading/highest degree term of the function is really what determines the outcome of the function. In <vue-mathjax :formula='`$f(n) = n^2+4n$`'></vue-mathjax>, <vue-mathjax :formula='`$n^2$`'></vue-mathjax>
               has the most impact to dictate <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>'s membership. For <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>, any
               <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> whose leading term is less than degree 2 will be <i>dominated</i> by <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. The inverse is also true; for
               any <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> where the leading term is higher than degree 2, we say <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> <i>dominates</i> <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>.
               A faster growing function dominates a slower growing one. If <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> dominates <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>, we can then assert that at some point
               <vue-mathjax :formula='`$f(n) = O(g(n))$`'></vue-mathjax> because <b>eventually</b>, regardless of other terms, there will be some point <vue-mathjax :formula='`$n_0$`'></vue-mathjax> such that every point thereafter
               <vue-mathjax :formula='`$g(n) > f(n)$`'></vue-mathjax>.
               <br>
               <br>
               Another observation is that <vue-mathjax :formula='`$\\Theta$`'></vue-mathjax> is the most restrictive set. <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> must belong to both
               <vue-mathjax :formula='`$O$`'></vue-mathjax> and <vue-mathjax :formula='`$\\Omega$`'></vue-mathjax> for <vue-mathjax :formula='`$f(n) = \\Theta$`'></vue-mathjax>. Piggybacking on thoughts from the paragraph above,
               it becomes clear that <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> must have matching degree to <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> for <vue-mathjax :formula='`$f(n) = \\Theta(g(n))$`'></vue-mathjax>.
               Only then can we guarantee that at no point in the domain of <i>n</i>, <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> will overtake <b>or</b> undertake <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>.
               <br>
               <br>
               I use the terms <i>upper</i> and <i>lower bound</i> a lot. Some books define them more rigidly and call them the <i>asymptotic upper</i> and <i>asymptotic lower bound</i> - communication can wear many hats.
               One term I find useful is that when <vue-mathjax :formula='`$f(n) = \\Theta(g(n))$`'></vue-mathjax> we can say that <vue-mathjax :formula='`$g(n)$`'></vue-mathjax> is a <i>tight bound</i> for
               <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>, indicating it is sandwiched between an upper and lower bound.
            </p>
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
               For the extra curious, you can an alternative description of the RAM on page 23 in <i>Introduction to Algorithms</i> linked above.
               With our hypothetical computer, we can now represent a simple algorithm as a function.
            </p>
            <prism-editor class="codeblock" v-model="forLoop" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               Not bad right? Line 3 is constant no matter the size of our input <i>n</i> for algorithm <i>simple</i> so it is always equal to 1 time step.
               The for loop however is dependent on the size of input <i>n</i> because it runs exactly <i>n</i> times. Because of this, we multiply the inner operations, represented vaguely as (...), 
               by <i>n</i> so that when we put everything together we are provided with <i>1 + n(...)</i>. We can now see that this function belongs to <vue-mathjax :formula='`$\\Theta(n)$`'></vue-mathjax>.
               To be clear, this function doesn't really fit the definition of an algorithm, even if it's pseudocode, but that is okay. I just want to convey a very simple example of translating code into a function.
               <br>
               <br>
               I think it is a good habit declare an algorithm <vue-mathjax :formula='`$\\Theta$`'></vue-mathjax> when possible because it provides more information to the reader, however using
               <vue-mathjax :formula='`$O$`'></vue-mathjax> is also very fine because the <i>upper bound</i> is the primary interest. Just as many scientists seek to <a href="https://youtu.be/EYPapE-3FRw?t=226" target="_blank">prove theories wrong</a>,
               many algorists and computer scientists seek to understand the <i>worst case scenario</i> for algorithms. Nobody cares if an algorithm is working efficiently, people only care if an algorithm is working <i>inefficiently</i>.
               If an algorithm operates within an acceptable timeframe, we are content. It is only when an algorithm takes an obscene amount of time to complete we ask <i>"what the hell is going on?"</i>.
               Except for our primary interest being towards the <i>worst case scenario</i>, I say the things here somewhat jokingly, I just want to convey the significance. 
               Although I do recommend watching the video linked just above, even from the beginning; it is one of my favorites.
            </p>
            <p>
               Let us look at an actual algorithm, <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">insertion sort</a>:
            </p>
            <prism-editor class="codeblock" v-model="insertionSort" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               Insertion sort is a very popular algorithm that, as it sounds, sorts a list/array (depending on what language you like) by the smallest value to the largest value. A top level understanding of how it
               works is that as the for loop iterates through a list, the while loop checks to see if the non-zero indexed value the for loop is on is less than the preceeding value in the list.
               If the while loop flags the preceeding value to be smaller than the non-zero indexed current value, it swaps the two values. This while loop continues until it reaches the beginning of the list, thus
               terminating and proceeding to the next value in the for loop to begin again until the end of the list is reached. Let us decompose it and translate it to a math function using the considerations of our RAM computer.
            </p>
            <prism-editor class="codeblock" v-model="insertionSort2" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               A little more complex than the previous simple algorithm! We conclude with the unrefined function <vue-mathjax :formula='`$n(1+n(1+1))$`'></vue-mathjax>. Here is a very specific explanation. Everything
               in the <i>insertionSort</i> algorithm occurs within a for loop that iterates <i>n</i> times (line 3). This is why everything in our polynomial is multiplied by the outermost <i>n</i>.
               One level into our for loop, we have a 
               simple initialization and a while loop (line 5 & 7 respectively). We know the initialization takes 1 time step, producing a 1 in our polynomial, but the while loop is a little trickier. So far, we have
               the partially translated function <vue-mathjax :formula='`$n(1+\\mathtt{while})$`'></vue-mathjax>, we need find a way to represent it functionally.
               <br>
                As mentioned above, we are <b>primarily
               interested in the worst case scenario</b>; it is most desirable to understand how <i>inefficient</i> an algorithm can perform. So we will always assume the maximum amount of iterations possible for some loop
               because we can then safely and confidently assume that no matter what, every permutation of list input <i>n</i> (for insertion sort), if we were to use that as input, would be more efficient. Because of this philosophy, we acknowledge
               the maximum amount of times the while loop can iterate for is <i>n</i> times, as long as the list itself. Conceptually, this would require a list input <i>n</i> that is sorted in reverse order
               (biggest to smallest).
               <br>
               So both loops can be represented as <i>n</i>. Now look at everything that loops <i>n</i> times in our while loop, we have two operations that do not depend on the input size so they are represented as single step operations.
               This results in the function <vue-mathjax :formula='`$n(1+n(1+1))$`'></vue-mathjax>, which when simplified is equal to <vue-mathjax :formula='`$2n^2+n$`'></vue-mathjax>.
               <br>
               <br>
               To find a function's membership in the "Big Oh" family, we know, as stated above, always look at the leading term. Coefficients to the leading term are also irrelevant because, remember we can pick any <i>c</i> to satisfy set membership. For
               instance, if I want to show <vue-mathjax :formula='`$f(n) = 2n^2+n = \\Theta(n^2)$`'></vue-mathjax>, I pick <vue-mathjax :formula='`$c_2 = 1$`'></vue-mathjax> and
               <vue-mathjax :formula='`$c_1 = 3$`'></vue-mathjax> providing <vue-mathjax :formula='`$1 \\cdot n^2 \\leq 2n^2 \\leq 3 \\cdot n^2$`'></vue-mathjax> as required by the definition of <vue-mathjax :formula='`$\\Theta$`'></vue-mathjax>.
               And this is correct, we have now shown that a very real algorithm, insertion sort, is <vue-mathjax :formula='`$\\Theta(n^2)$`'></vue-mathjax> and <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> on
               a <i>worst case scenario</i>. Food for thought though, what if input <i>n</i> is already perfectly sorted? If <i>n</i> were perfectly sorted from smallest to largest, then the while loop would never
               run, thus giving a lower bound, or <i>best case scenario</i> of <vue-mathjax :formula='`$\\Omega(n)$`'></vue-mathjax>.
            </p>
            <div id="blogSubHeader">
               Analysis & Addressing the Elephant
            </div>
            <p>
               First analysis, then the elephant. So we've shown our insertion sort algorithm to be <vue-mathjax :formula='`$\\Theta(n^2)$`'></vue-mathjax>, now what? Well, what we have done is quantified the efficiency,
               within allowable tolerances, of the insertion sort algorithm. Now we can compare it to other algorithms to see how it stacks up against others. <a href="https://www.bigocheatsheet.com/">Bigocheatsheet</a>
               provides many resources to show just that. We can see that...well <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> algorithms are classified as "horrible", meaning that as the input size <i>n</i> gets
               larger, the amount of operations required scales quadratically. If we have an input size of 10 for a <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> algorithm, at worst that algorithm will require 100
               operations. If we have an input size of 1,000,000 (not unreasonable in the realm of computers), our <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> algorithm will take 1,000,000,000,000 (a trillion)
               operations. In <a href="https://www.algorist.com/" target="_blank">Skiena's</a> book (p. 38), you can find an extremely helpful table that compares algorithm runtimes between each other. It is shown
               below.
            </p>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/bigoscaling.png" alt="">
            <p>
               Okay now the elephant. If you're already familiar with "Big Oh" or may have derived from the bigocheatsheet and table resources above, you will notice I only talk about a portion of the complexities.
               <vue-mathjax :formula='`$O(n^2)$`'></vue-mathjax> is certainly "horrible", but nowhere as horrible as <vue-mathjax :formula='`$O(n!)$`'></vue-mathjax> or <vue-mathjax :formula='`$O(2^n)$`'></vue-mathjax>.
               Just look at how bad they get on inputs of size 30 and 50 respectively. And what about <vue-mathjax :formula='`$O(lg(n))$`'></vue-mathjax>? What an insanely efficient runtime. I talk about why I omit them below,
               but the elephant is simply that I do not explain them at all here.
            </p>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               For the complexities I don't talk about here, I would like to provide algorithms that represent these complexities their own blog. This is because algorithms that belong to for example,
               <vue-mathjax :formula='`$O(nlg(n))$`'></vue-mathjax>, are frequently shown with recursion - a procedure I think warrants a decently "in depth" discussion on it's own. 
               <br>
               <br>
               There are also other notations <vue-mathjax :formula='`$o(n)$`'></vue-mathjax> and <vue-mathjax :formula='`$\\omega(n)$`'></vue-mathjax> that I don't mention. It was kinda funny seeing <vue-mathjax :formula='`$o(n)$`'></vue-mathjax>
               again after using it for differentiating the quadratic form. My goal for this blog was to introduce a well grounded but simple enough explanation to "Big Oh" notation and I think everything I mentioned and did not
               mention provides a nice balance between "enough detail to conveniently understand it" and "too much detail, where's my notebook?!".
            </p>
            <p>
               Ryan
            </p>
         </div>
         <toTop />
   </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></script>
<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      PrismEditor,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         bigO: '$f(n) = O(g(n))$',
         bigOmega: '$f(n) = \\Omega(g(n))$',
         bigTheta: '$f(n) = \\Theta(g(n))$',
         forLoop: 
`def simple(n):
   # Memory access
   x = n

   # Loop
   for i in range(x):
      ...
      
# Algorithm equals 1 + n(...)`,
         insertionSort: 
`def insertionSort(n):
   for i in range(len(n)):
      j = i
      while ((j>0) and s[j] < s[j-1])):
         swap(s[j], s[j-1])
         j -= 1`,
         insertionSort2: 
`def insertionSort(n):
   # Loop going around n times
   for i in range(len(n)):
      # Memory access
      j = i
      # Loop going around n times in *worst case scenario*
      while ((j>0) and s[j] < s[j-1])):
         # Simple call operation
         swap(s[j], s[j-1])
         # Memory access
         j -= 1
         
# Algorithm equals n(1+n(1+1)) -> 2n^2 + n`,
      }
   },
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      }
   },

   beforeMount() {

      // let mathjaxScript = document.createElement('script')
      // mathjaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
      // document.head.appendChild(mathjaxScript)

      window.MathJax.Hub.Config({
      tex2jax: {
         inlineMath: [['$','$']],
         displayMath: [['$$', '$$'], ['[', ']']],
         processEscapes: true,
         processEnvironments: true
      }
      });
   },

   mounted () {
      if(threeScene.cache == 'noScene') {
         return
      } else {
         
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})
         setTimeout(() => {
            threeScene.destroyHero()
         }, 1500)
         // Easier to just use the backdrop component, which I made earlier, instead of tweening.
         // gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'noScene'
      }
   } 
}
</script>
<style scoped>

.bgColor {
   background-color: #1d1d1d;
   border-radius: 10px;
}

#curriculumBody {
   width: auto !important;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 20px;
   font-size: 22px;
}

p {
   padding: 25px 7vw !important;
   line-height: 2;
}

a {
   color: var(--white);
   text-decoration: underline;
   font-style: oblique;
}

h2 {
   font-size: 16px;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}

#blogSubHeader {
   font-family: 'Lora', sans-serif;
   font-size: 19px;
   padding-top: 50px;
}
</style>