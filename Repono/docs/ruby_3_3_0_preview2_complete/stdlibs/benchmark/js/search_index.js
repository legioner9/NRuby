var search_data = {"index":{"searchIndex":["benchmark","tms","*()","+()","-()","/()","add()","add!()","benchmark()","benchmark()","bm()","bm()","bmbm()","bmbm()","format()","measure()","measure()","memberwise()","new()","realtime()","realtime()","to_a()","to_h()","to_s()"],"longSearchIndex":["benchmark","benchmark::tms","benchmark::tms#*()","benchmark::tms#+()","benchmark::tms#-()","benchmark::tms#/()","benchmark::tms#add()","benchmark::tms#add!()","benchmark#benchmark()","benchmark::benchmark()","benchmark#bm()","benchmark::bm()","benchmark#bmbm()","benchmark::bmbm()","benchmark::tms#format()","benchmark#measure()","benchmark::measure()","benchmark::tms#memberwise()","benchmark::tms::new()","benchmark#realtime()","benchmark::realtime()","benchmark::tms#to_a()","benchmark::tms#to_h()","benchmark::tms#to_s()"],"info":[["Benchmark","","Benchmark.html","","<p>The Benchmark module provides methods to measure and report the time used to execute Ruby code.\n<p>Measure …\n"],["Benchmark::Tms","","Benchmark/Tms.html","","<p>A data object, representing the times associated with a benchmark measurement.\n"],["*","Benchmark::Tms","Benchmark/Tms.html#method-i-2A","(x)","<p>Returns a new Tms object obtained by memberwise multiplication of the individual times for this Tms object …\n"],["+","Benchmark::Tms","Benchmark/Tms.html#method-i-2B","(other)","<p>Returns a new Tms object obtained by memberwise summation of the individual times for this Tms object …\n"],["-","Benchmark::Tms","Benchmark/Tms.html#method-i-2D","(other)","<p>Returns a new Tms object obtained by memberwise subtraction of the individual times for the <code>other</code> Tms …\n"],["/","Benchmark::Tms","Benchmark/Tms.html#method-i-2F","(x)","<p>Returns a new Tms object obtained by memberwise division of the individual times for this Tms object …\n"],["add","Benchmark::Tms","Benchmark/Tms.html#method-i-add","()","<p>Returns a new Tms object whose times are the sum of the times for this Tms object, plus the time required …\n"],["add!","Benchmark::Tms","Benchmark/Tms.html#method-i-add-21","(&blk)","<p>An in-place version of #add. Changes the times of this Tms object by making it the sum of the times for …\n"],["benchmark","Benchmark","Benchmark.html#method-i-benchmark","(caption = \"\", label_width = nil, format = nil, *labels)","<p>Invokes the block with a Benchmark::Report object, which may be used to collect and report on the results …\n"],["benchmark","Benchmark","Benchmark.html#method-c-benchmark","(caption = \"\", label_width = nil, format = nil, *labels)","<p>Invokes the block with a Benchmark::Report object, which may be used to collect and report on the results …\n"],["bm","Benchmark","Benchmark.html#method-i-bm","(label_width = 0, *labels)","<p>A simple interface to the #benchmark method, #bm generates sequential reports with labels. <code>label_width</code> …\n"],["bm","Benchmark","Benchmark.html#method-c-bm","(label_width = 0, *labels)","<p>A simple interface to the #benchmark method, #bm generates sequential reports with labels. <code>label_width</code> …\n"],["bmbm","Benchmark","Benchmark.html#method-i-bmbm","(width = 0)","<p>Sometimes benchmark results are skewed because code executed earlier encounters different garbage collection …\n"],["bmbm","Benchmark","Benchmark.html#method-c-bmbm","(width = 0)","<p>Sometimes benchmark results are skewed because code executed earlier encounters different garbage collection …\n"],["format","Benchmark::Tms","Benchmark/Tms.html#method-i-format","(format = nil, *args)","<p>Returns the contents of this Tms object as a formatted string, according to a <code>format</code> string like that …\n"],["measure","Benchmark","Benchmark.html#method-i-measure","(label = \"\")","<p>Returns the time used to execute the given block as a Benchmark::Tms object. Takes <code>label</code> option.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["measure","Benchmark","Benchmark.html#method-c-measure","(label = \"\")","<p>Returns the time used to execute the given block as a Benchmark::Tms object. Takes <code>label</code> option.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["memberwise","Benchmark::Tms","Benchmark/Tms.html#method-i-memberwise","(op, x)","<p>Returns a new Tms object obtained by memberwise operation <code>op</code> of the individual times for this Tms object …\n"],["new","Benchmark::Tms","Benchmark/Tms.html#method-c-new","(utime = 0.0, stime = 0.0, cutime = 0.0, cstime = 0.0, real = 0.0, label = nil)","<p>Returns an initialized Tms object which has <code>utime</code> as the user CPU time, <code>stime</code> as the system CPU time, …\n"],["realtime","Benchmark","Benchmark.html#method-i-realtime","()","<p>Returns the elapsed real time used to execute the given block.\n"],["realtime","Benchmark","Benchmark.html#method-c-realtime","()","<p>Returns the elapsed real time used to execute the given block.\n"],["to_a","Benchmark::Tms","Benchmark/Tms.html#method-i-to_a","()","<p>Returns a new 6-element array, consisting of the label, user CPU time, system CPU time, children’s …\n"],["to_h","Benchmark::Tms","Benchmark/Tms.html#method-i-to_h","()","<p>Returns a hash containing the same data as ‘to_a`.\n"],["to_s","Benchmark::Tms","Benchmark/Tms.html#method-i-to_s","()","<p>Same as #format.\n"]]}}