var search_data = {"index":{"searchIndex":["io","generic_readable","beep()","check_winsize_changed()","clear_screen()","console()","console_mode()","console_mode=()","console_size()","cooked()","cooked!()","cursor()","cursor=()","cursor_down()","cursor_left()","cursor_right()","cursor_up()","default_console_size()","echo=()","echo?()","erase_line()","erase_screen()","getch()","getch()","getpass()","getpass()","goto()","goto_column()","iflush()","ioflush()","noecho()","nonblock()","nonblock=()","nonblock?()","nread()","oflush()","pressed?()","raw()","raw!()","ready?()","scroll_backward()","scroll_forward()","wait()","wait_priority()","wait_readable()","wait_writable()","winsize()","winsize=()"],"longSearchIndex":["io","io::generic_readable","io#beep()","io#check_winsize_changed()","io#clear_screen()","io::console()","io#console_mode()","io#console_mode=()","io::console_size()","io#cooked()","io#cooked!()","io#cursor()","io#cursor=()","io#cursor_down()","io#cursor_left()","io#cursor_right()","io#cursor_up()","io::default_console_size()","io#echo=()","io#echo?()","io#erase_line()","io#erase_screen()","io#getch()","io::generic_readable#getch()","io#getpass()","io::generic_readable#getpass()","io#goto()","io#goto_column()","io#iflush()","io#ioflush()","io#noecho()","io#nonblock()","io#nonblock=()","io#nonblock?()","io#nread()","io#oflush()","io#pressed?()","io#raw()","io#raw!()","io#ready?()","io#scroll_backward()","io#scroll_forward()","io#wait()","io#wait_priority()","io#wait_readable()","io#wait_writable()","io#winsize()","io#winsize=()"],"info":[["IO","","IO.html","",""],["IO::generic_readable","","IO/generic_readable.html","",""],["beep","IO","IO.html#method-i-beep","()",""],["check_winsize_changed","IO","IO.html#method-i-check_winsize_changed","()",""],["clear_screen","IO","IO.html#method-i-clear_screen","()",""],["console","IO","IO.html#method-c-console","(*args)","<p>Returns an File instance opened console.\n<p>If <code>sym</code> is given, it will be sent to the opened console with  …\n"],["console_mode","IO","IO.html#method-i-console_mode","()","<p>Returns a data represents the current console mode.\n<p>You must require ‘io/console’ to use this …\n"],["console_mode=","IO","IO.html#method-i-console_mode-3D","(p1)","<p>Sets the console mode to <code>mode</code>.\n<p>You must require ‘io/console’ to use this method.\n"],["console_size","IO","IO.html#method-c-console_size","()",""],["cooked","IO","IO.html#method-i-cooked","()","<p>Yields <code>self</code> within cooked mode.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">STDIN</span>.<span class=\"ruby-identifier\">cooked</span>(<span class=\"ruby-operator\">&amp;</span><span class=\"ruby-value\">:gets</span>)\n</pre>\n<p>will read and return a line with echo back and line …\n"],["cooked!","IO","IO.html#method-i-cooked-21","()","<p>Enables cooked mode.\n<p>If the terminal mode needs to be back, use io.cooked { … }.\n<p>You must require ‘io/console’ …\n"],["cursor","IO","IO.html#method-i-cursor","()",""],["cursor=","IO","IO.html#method-i-cursor-3D","(p1)",""],["cursor_down","IO","IO.html#method-i-cursor_down","(p1)",""],["cursor_left","IO","IO.html#method-i-cursor_left","(p1)",""],["cursor_right","IO","IO.html#method-i-cursor_right","(p1)",""],["cursor_up","IO","IO.html#method-i-cursor_up","(p1)",""],["default_console_size","IO","IO.html#method-c-default_console_size","()","<p>fallback to console window size\n"],["echo=","IO","IO.html#method-i-echo-3D","(p1)","<p>Enables/disables echo back. On some platforms, all combinations of this flags and raw/cooked mode may …\n"],["echo?","IO","IO.html#method-i-echo-3F","()","<p>Returns <code>true</code> if echo back is enabled.\n<p>You must require ‘io/console’ to use this method.\n"],["erase_line","IO","IO.html#method-i-erase_line","(p1)",""],["erase_screen","IO","IO.html#method-i-erase_screen","(p1)",""],["getch","IO","IO.html#method-i-getch","(*args)","<p>Reads and returns a character in raw mode.\n<p>See IO#raw for details on the parameters.\n<p>You must require ‘io/console’ …\n"],["getch","IO::generic_readable","IO/generic_readable.html#method-i-getch","(*args)","<p>See IO#getch.\n"],["getpass","IO","IO.html#method-i-getpass","(*args)","<p>Reads and returns a line without echo back. Prints <code>prompt</code> unless it is <code>nil</code>.\n<p>The newline character that …\n"],["getpass","IO::generic_readable","IO/generic_readable.html#method-i-getpass","(*args)","<p>See IO#getpass.\n"],["goto","IO","IO.html#method-i-goto","(p1, p2)",""],["goto_column","IO","IO.html#method-i-goto_column","(p1)",""],["iflush","IO","IO.html#method-i-iflush","()","<p>Flushes input buffer in kernel.\n<p>You must require ‘io/console’ to use this method.\n"],["ioflush","IO","IO.html#method-i-ioflush","()","<p>Flushes input and output buffers in kernel.\n<p>You must require ‘io/console’ to use this method. …\n"],["noecho","IO","IO.html#method-i-noecho","()","<p>Yields <code>self</code> with disabling echo back.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">STDIN</span>.<span class=\"ruby-identifier\">noecho</span>(<span class=\"ruby-operator\">&amp;</span><span class=\"ruby-value\">:gets</span>)\n</pre>\n<p>will read and return a line without echo back. …\n"],["nonblock","IO","IO.html#method-i-nonblock","(p1 = v1)","<p>Yields <code>self</code> in non-blocking mode.\n<p>When <code>false</code> is given as an argument, <code>self</code> is yielded in blocking mode. …\n"],["nonblock=","IO","IO.html#method-i-nonblock-3D","(p1)","<p>Enables non-blocking mode on a stream when set to <code>true</code>, and blocking mode when set to <code>false</code>.\n<p>This method …\n"],["nonblock?","IO","IO.html#method-i-nonblock-3F","()","<p>Returns <code>true</code> if an IO object is in non-blocking mode.\n"],["nread","IO","IO.html#method-i-nread","()","<p>Returns number of bytes that can be read without blocking. Returns zero if no information available. …\n"],["oflush","IO","IO.html#method-i-oflush","()","<p>Flushes output buffer in kernel.\n<p>You must require ‘io/console’ to use this method.\n"],["pressed?","IO","IO.html#method-i-pressed-3F","(p1)",""],["raw","IO","IO.html#method-i-raw","(*args)","<p>Yields <code>self</code> within raw mode, and returns the result of the block.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">STDIN</span>.<span class=\"ruby-identifier\">raw</span>(<span class=\"ruby-operator\">&amp;</span><span class=\"ruby-value\">:gets</span>)\n</pre>\n<p>will read and return …\n"],["raw!","IO","IO.html#method-i-raw-21","(*args)","<p>Enables raw mode, and returns <code>io</code>.\n<p>If the terminal mode needs to be back, use <code>io.raw { ... }</code>.\n<p>See IO#raw …\n"],["ready?","IO","IO.html#method-i-ready-3F","()","<p>Returns a truthy value if input available without blocking, or a falsy value.\n<p>You must require ‘io/wait’ …\n"],["scroll_backward","IO","IO.html#method-i-scroll_backward","(p1)",""],["scroll_forward","IO","IO.html#method-i-scroll_forward","(p1)",""],["wait","IO","IO.html#method-i-wait","(*args)","<p>Waits until the IO becomes ready for the specified events and returns the subset of events that become …\n"],["wait_priority","IO","IO.html#method-i-wait_priority","(*args)","<p>Waits until IO is priority and returns a truthy value or a falsy value when times out. Priority data …\n"],["wait_readable","IO","IO.html#method-i-wait_readable","(*args)","<p>Waits until IO is readable and returns a truthy value, or a falsy value when times out.  Returns a truthy …\n"],["wait_writable","IO","IO.html#method-i-wait_writable","(*args)","<p>Waits until IO is writable and returns a truthy value or a falsy value when times out.\n<p>You must require …\n"],["winsize","IO","IO.html#method-i-winsize","()","<p>Returns console size.\n<p>You must require ‘io/console’ to use this method.\n"],["winsize=","IO","IO.html#method-i-winsize-3D","(p1)","<p>Tries to set console size.  The effect depends on the platform and the running environment.\n<p>You must require …\n"]]}}