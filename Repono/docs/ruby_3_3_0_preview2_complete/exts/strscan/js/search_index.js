var search_data = {"index":{"searchIndex":["stringscanner","error","<<()","[]()","beginning_of_line?()","captures()","charpos()","check()","check_until()","clear()","concat()","empty?()","eos?()","exist?()","fixed_anchor?()","get_byte()","getbyte()","getch()","initialize_copy()","inspect()","match?()","matched()","matched?()","matched_size()","must_c_version()","named_captures()","new()","peek()","peep()","pointer()","pointer=()","pos()","pos=()","post_match()","pre_match()","reset()","rest()","rest?()","rest_size()","restsize()","scan()","scan_full()","scan_until()","search_full()","size()","skip()","skip_until()","string()","string=()","terminate()","unscan()","values_at()"],"longSearchIndex":["stringscanner","stringscanner::error","stringscanner#<<()","stringscanner#[]()","stringscanner#beginning_of_line?()","stringscanner#captures()","stringscanner#charpos()","stringscanner#check()","stringscanner#check_until()","stringscanner#clear()","stringscanner#concat()","stringscanner#empty?()","stringscanner#eos?()","stringscanner#exist?()","stringscanner#fixed_anchor?()","stringscanner#get_byte()","stringscanner#getbyte()","stringscanner#getch()","stringscanner#initialize_copy()","stringscanner#inspect()","stringscanner#match?()","stringscanner#matched()","stringscanner#matched?()","stringscanner#matched_size()","stringscanner::must_c_version()","stringscanner#named_captures()","stringscanner::new()","stringscanner#peek()","stringscanner#peep()","stringscanner#pointer()","stringscanner#pointer=()","stringscanner#pos()","stringscanner#pos=()","stringscanner#post_match()","stringscanner#pre_match()","stringscanner#reset()","stringscanner#rest()","stringscanner#rest?()","stringscanner#rest_size()","stringscanner#restsize()","stringscanner#scan()","stringscanner#scan_full()","stringscanner#scan_until()","stringscanner#search_full()","stringscanner#size()","stringscanner#skip()","stringscanner#skip_until()","stringscanner#string()","stringscanner#string=()","stringscanner#terminate()","stringscanner#unscan()","stringscanner#values_at()"],"info":[["StringScanner","","StringScanner.html","","<p>StringScanner provides for lexical scanning operations on a String.  Here is an example of its usage: …\n"],["StringScanner::Error","","StringScanner/Error.html","",""],["<<","StringScanner","StringScanner.html#method-i-3C-3C","(p1)","<p>Appends <code>str</code> to the string being scanned. This method does not affect scan pointer.\n\n<pre>s = StringScanner.new(&quot;Fri ...</pre>\n"],["[]","StringScanner","StringScanner.html#method-i-5B-5D","(p1)","<p>Returns the n-th subgroup in the most recent match.\n\n<pre>s = StringScanner.new(&quot;Fri Dec 12 1975 14:39&quot;)\ns.scan(/(\\w+) ...</pre>\n"],["beginning_of_line?","StringScanner","StringScanner.html#method-i-beginning_of_line-3F","()","<p>Returns <code>true</code> if and only if the scan pointer is at the beginning of the line.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&quot;test\\ntest\\n&quot;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["captures","StringScanner","StringScanner.html#method-i-captures","()","<p>Returns the subgroups in the most recent match (not including the full match). If nothing was priorly …\n"],["charpos","StringScanner","StringScanner.html#method-i-charpos","()","<p>Returns the character position of the scan pointer.  In the ‘reset’ position, this value is zero. …\n"],["check","StringScanner","StringScanner.html#method-i-check","(p1)","<p>This returns the value that #scan would return, without advancing the scan pointer.  The match register …\n"],["check_until","StringScanner","StringScanner.html#method-i-check_until","(p1)","<p>This returns the value that #scan_until would return, without advancing the scan pointer.  The match …\n"],["clear","StringScanner","StringScanner.html#method-i-clear","()","<p>Equivalent to #terminate. This method is obsolete; use #terminate instead.\n"],["concat","StringScanner","StringScanner.html#method-i-concat","(p1)","<p>Appends <code>str</code> to the string being scanned. This method does not affect scan pointer.\n\n<pre>s = StringScanner.new(&quot;Fri ...</pre>\n"],["empty?","StringScanner","StringScanner.html#method-i-empty-3F","()","<p>Equivalent to #eos?. This method is obsolete, use #eos? instead.\n"],["eos?","StringScanner","StringScanner.html#method-i-eos-3F","()","<p>Returns <code>true</code> if the scan pointer is at the end of the string.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;test string&#39;</span>)\n<span class=\"ruby-identifier\">p</span> <span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">eos?</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["exist?","StringScanner","StringScanner.html#method-i-exist-3F","(p1)","<p>Looks <em>ahead</em> to see if the <code>pattern</code> exists <em>anywhere</em> in the string, without advancing the scan pointer. …\n"],["fixed_anchor?","StringScanner","StringScanner.html#method-i-fixed_anchor-3F","()","<p>Whether <code>scanner</code> uses fixed anchor mode or not.\n<p>If fixed anchor mode is used, <code>\\A</code> always matches the beginning …\n"],["get_byte","StringScanner","StringScanner.html#method-i-get_byte","()","<p>Scans one byte and returns it. This method is not multibyte character sensitive. See also: #getch.\n\n<pre>s = ...</pre>\n"],["getbyte","StringScanner","StringScanner.html#method-i-getbyte","()","<p>Equivalent to #get_byte. This method is obsolete; use #get_byte instead.\n"],["getch","StringScanner","StringScanner.html#method-i-getch","()","<p>Scans one character and returns it. This method is multibyte character sensitive.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&quot;ab&quot;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["initialize_copy","StringScanner","StringScanner.html#method-i-initialize_copy","(p1)","<p>Duplicates a StringScanner object.\n"],["inspect","StringScanner","StringScanner.html#method-i-inspect","()","<p>Returns a string that represents the StringScanner object, showing:\n<p>the current position\n<p>the size of the …\n"],["match?","StringScanner","StringScanner.html#method-i-match-3F","(p1)","<p>Tests whether the given <code>pattern</code> is matched from the current scan pointer. Returns the length of the match, …\n"],["matched","StringScanner","StringScanner.html#method-i-matched","()","<p>Returns the last matched string.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;test string&#39;</span>)\n<span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">match?</span>(<span class=\"ruby-regexp\">/\\w+/</span>)     <span class=\"ruby-comment\"># -&gt; 4</span>\n<span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">matched</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["matched?","StringScanner","StringScanner.html#method-i-matched-3F","()","<p>Returns <code>true</code> if and only if the last match was successful.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;test string&#39;</span>)\n<span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">match?</span>(<span class=\"ruby-regexp\">/\\w+/</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["matched_size","StringScanner","StringScanner.html#method-i-matched_size","()","<p>Returns the size of the most recent match in bytes, or <code>nil</code> if there was no recent match.  This is different …\n"],["must_C_version","StringScanner","StringScanner.html#method-c-must_C_version","()","<p>This method is defined for backward compatibility.\n"],["named_captures","StringScanner","StringScanner.html#method-i-named_captures","()","<p>Returns a hash of string variables matching the regular expression.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">scan</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;foobarbaz&#39;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["new","StringScanner","StringScanner.html#method-c-new","(p1, p2 = v2)","<p>Creates a new StringScanner object to scan over the given <code>string</code>.\n<p>If <code>fixed_anchor</code> is <code>true</code>, <code>\\A</code> always matches …\n"],["peek","StringScanner","StringScanner.html#method-i-peek","(p1)","<p>Extracts a string corresponding to <code>string[pos,len]</code>, without advancing the scan pointer.\n\n<pre>s = StringScanner.new(&#39;test ...</pre>\n"],["peep","StringScanner","StringScanner.html#method-i-peep","(p1)","<p>Equivalent to #peek. This method is obsolete; use #peek instead.\n"],["pointer","StringScanner","StringScanner.html#method-i-pointer","()","<p>Returns the byte position of the scan pointer.  In the ‘reset’ position, this value is zero. …\n"],["pointer=","StringScanner","StringScanner.html#method-i-pointer-3D","(p1)","<p>Sets the byte position of the scan pointer.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;test string&#39;</span>)\n<span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">pos</span> = <span class=\"ruby-value\">7</span>            <span class=\"ruby-operator\">...</span>\n</pre>\n"],["pos","StringScanner","StringScanner.html#method-i-pos","()","<p>Returns the byte position of the scan pointer.  In the ‘reset’ position, this value is zero. …\n"],["pos=","StringScanner","StringScanner.html#method-i-pos-3D","(p1)","<p>Sets the byte position of the scan pointer.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">s</span> = <span class=\"ruby-constant\">StringScanner</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;test string&#39;</span>)\n<span class=\"ruby-identifier\">s</span>.<span class=\"ruby-identifier\">pos</span> = <span class=\"ruby-value\">7</span>            <span class=\"ruby-operator\">...</span>\n</pre>\n"],["post_match","StringScanner","StringScanner.html#method-i-post_match","()","<p>Returns the <strong><em>post</strong>-match</em> (in the regular expression sense) of the last scan.\n\n<pre>s = StringScanner.new(&#39;test ...</pre>\n"],["pre_match","StringScanner","StringScanner.html#method-i-pre_match","()","<p>Returns the <strong><em>pre</strong>-match</em> (in the regular expression sense) of the last scan.\n\n<pre>s = StringScanner.new(&#39;test ...</pre>\n"],["reset","StringScanner","StringScanner.html#method-i-reset","()","<p>Reset the scan pointer (index 0) and clear matching data.\n"],["rest","StringScanner","StringScanner.html#method-i-rest","()","<p>Returns the “rest” of the string (i.e. everything after the scan pointer). If there is no more …\n"],["rest?","StringScanner","StringScanner.html#method-i-rest-3F","()","<p>Returns true if and only if there is more data in the string.  See #eos?. This method is obsolete; use …\n"],["rest_size","StringScanner","StringScanner.html#method-i-rest_size","()","<p><code>s.rest_size</code> is equivalent to <code>s.rest.size</code>.\n"],["restsize","StringScanner","StringScanner.html#method-i-restsize","()","<p><code>s.restsize</code> is equivalent to <code>s.rest_size</code>. This method is obsolete; use #rest_size instead.\n"],["scan","StringScanner","StringScanner.html#method-i-scan","(p1)","<p>Tries to match with <code>pattern</code> at the current position. If there’s a match, the scanner advances the …\n"],["scan_full","StringScanner","StringScanner.html#method-i-scan_full","(p1, p2, p3)","<p>Tests whether the given <code>pattern</code> is matched from the current scan pointer. Advances the scan pointer if …\n"],["scan_until","StringScanner","StringScanner.html#method-i-scan_until","(p1)","<p>Scans the string <em>until</em> the <code>pattern</code> is matched.  Returns the substring up to and including the end of …\n"],["search_full","StringScanner","StringScanner.html#method-i-search_full","(p1, p2, p3)","<p>Scans the string <em>until</em> the <code>pattern</code> is matched. Advances the scan pointer if <code>advance_pointer_p</code>, otherwise …\n"],["size","StringScanner","StringScanner.html#method-i-size","()","<p>Returns the amount of subgroups in the most recent match. The full match counts as a subgroup.\n\n<pre>s = StringScanner.new(&quot;Fri ...</pre>\n"],["skip","StringScanner","StringScanner.html#method-i-skip","(p1)","<p>Attempts to skip over the given <code>pattern</code> beginning with the scan pointer. If it matches, the scan pointer …\n"],["skip_until","StringScanner","StringScanner.html#method-i-skip_until","(p1)","<p>Advances the scan pointer until <code>pattern</code> is matched and consumed.  Returns the number of bytes advanced, …\n"],["string","StringScanner","StringScanner.html#method-i-string","()","<p>Returns the string being scanned.\n"],["string=","StringScanner","StringScanner.html#method-i-string-3D","(p1)","<p>Changes the string being scanned to <code>str</code> and resets the scanner. Returns <code>str</code>.\n"],["terminate","StringScanner","StringScanner.html#method-i-terminate","()","<p>Sets the scan pointer to the end of the string and clear matching data.\n"],["unscan","StringScanner","StringScanner.html#method-i-unscan","()","<p>Sets the scan pointer to the previous position.  Only one previous position is remembered, and it changes …\n"],["values_at","StringScanner","StringScanner.html#method-i-values_at","(*args)","<p>Returns the subgroups in the most recent match at the given indices. If nothing was priorly matched, …\n"]]}}