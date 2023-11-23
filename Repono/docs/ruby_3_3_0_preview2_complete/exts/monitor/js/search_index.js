var search_data = {"index":{"searchIndex":["monitor","monitormixin","conditionvariable","broadcast()","enter()","exit()","extend_object()","mon_check_owner()","mon_check_owner()","mon_enter()","mon_enter()","mon_exit()","mon_exit()","mon_initialize()","mon_locked?()","mon_locked?()","mon_owned?()","mon_owned?()","mon_synchronize()","mon_synchronize()","mon_try_enter()","mon_try_enter()","new()","new()","new_cond()","new_cond()","signal()","synchronize()","synchronize()","try_enter()","try_mon_enter()","try_mon_enter()","wait()","wait_for_cond()","wait_until()","wait_while()"],"longSearchIndex":["monitor","monitormixin","monitormixin::conditionvariable","monitormixin::conditionvariable#broadcast()","monitor#enter()","monitor#exit()","monitormixin::extend_object()","monitor#mon_check_owner()","monitormixin#mon_check_owner()","monitor#mon_enter()","monitormixin#mon_enter()","monitor#mon_exit()","monitormixin#mon_exit()","monitormixin#mon_initialize()","monitor#mon_locked?()","monitormixin#mon_locked?()","monitor#mon_owned?()","monitormixin#mon_owned?()","monitor#mon_synchronize()","monitormixin#mon_synchronize()","monitor#mon_try_enter()","monitormixin#mon_try_enter()","monitormixin::new()","monitormixin::conditionvariable::new()","monitor#new_cond()","monitormixin#new_cond()","monitormixin::conditionvariable#signal()","monitor#synchronize()","monitormixin#synchronize()","monitor#try_enter()","monitor#try_mon_enter()","monitormixin#try_mon_enter()","monitormixin::conditionvariable#wait()","monitor#wait_for_cond()","monitormixin::conditionvariable#wait_until()","monitormixin::conditionvariable#wait_while()"],"info":[["Monitor","","Monitor.html","","<p>Use the Monitor class when you want to have a lock object for blocks with mutual exclusion.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;monitor&#39;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["MonitorMixin","","MonitorMixin.html","","<p>In concurrent programming, a monitor is an object or module intended to be used safely by more than one …\n"],["MonitorMixin::ConditionVariable","","MonitorMixin/ConditionVariable.html","","<p>FIXME: This isn’t documented in Nutshell.\n<p>Since MonitorMixin.new_cond returns a ConditionVariable …\n"],["broadcast","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-broadcast","()","<p>Wakes up all threads waiting for this lock.\n"],["enter","Monitor","Monitor.html#method-i-enter","()",""],["exit","Monitor","Monitor.html#method-i-exit","()",""],["extend_object","MonitorMixin","MonitorMixin.html#method-c-extend_object","(obj)",""],["mon_check_owner","Monitor","Monitor.html#method-i-mon_check_owner","()",""],["mon_check_owner","MonitorMixin","MonitorMixin.html#method-i-mon_check_owner","()",""],["mon_enter","Monitor","Monitor.html#method-i-mon_enter","()",""],["mon_enter","MonitorMixin","MonitorMixin.html#method-i-mon_enter","()","<p>Enters exclusive section.\n"],["mon_exit","Monitor","Monitor.html#method-i-mon_exit","()",""],["mon_exit","MonitorMixin","MonitorMixin.html#method-i-mon_exit","()","<p>Leaves exclusive section.\n"],["mon_initialize","MonitorMixin","MonitorMixin.html#method-i-mon_initialize","()","<p>Initializes the MonitorMixin after being included in a class or when an object has been extended with …\n"],["mon_locked?","Monitor","Monitor.html#method-i-mon_locked-3F","()",""],["mon_locked?","MonitorMixin","MonitorMixin.html#method-i-mon_locked-3F","()","<p>Returns true if this monitor is locked by any thread\n"],["mon_owned?","Monitor","Monitor.html#method-i-mon_owned-3F","()",""],["mon_owned?","MonitorMixin","MonitorMixin.html#method-i-mon_owned-3F","()","<p>Returns true if this monitor is locked by current thread.\n"],["mon_synchronize","Monitor","Monitor.html#method-i-mon_synchronize","()",""],["mon_synchronize","MonitorMixin","MonitorMixin.html#method-i-mon_synchronize","(&b)","<p>Enters exclusive section and executes the block.  Leaves the exclusive section automatically when the …\n"],["mon_try_enter","Monitor","Monitor.html#method-i-mon_try_enter","()",""],["mon_try_enter","MonitorMixin","MonitorMixin.html#method-i-mon_try_enter","()","<p>Attempts to enter exclusive section.  Returns <code>false</code> if lock fails.\n"],["new","MonitorMixin","MonitorMixin.html#method-c-new","(...)","<p>Use <code>extend MonitorMixin</code> or <code>include MonitorMixin</code> instead of this constructor.  Have look at the examples …\n"],["new","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-c-new","(monitor)",""],["new_cond","Monitor","Monitor.html#method-i-new_cond","()",""],["new_cond","MonitorMixin","MonitorMixin.html#method-i-new_cond","()","<p>Creates a new MonitorMixin::ConditionVariable associated with the Monitor object.\n"],["signal","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-signal","()","<p>Wakes up the first thread in line waiting for this lock.\n"],["synchronize","Monitor","Monitor.html#method-i-synchronize","()",""],["synchronize","MonitorMixin","MonitorMixin.html#method-i-synchronize","(&b)",""],["try_enter","Monitor","Monitor.html#method-i-try_enter","()",""],["try_mon_enter","Monitor","Monitor.html#method-i-try_mon_enter","()","<p>for compatibility\n"],["try_mon_enter","MonitorMixin","MonitorMixin.html#method-i-try_mon_enter","()","<p>For backward compatibility\n"],["wait","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait","(timeout = nil)","<p>Releases the lock held in the associated monitor and waits; reacquires the lock on wakeup.\n<p>If <code>timeout</code> …\n"],["wait_for_cond","Monitor","Monitor.html#method-i-wait_for_cond","(p1, p2)",""],["wait_until","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait_until","()","<p>Calls wait repeatedly until the given block yields a truthy value.\n"],["wait_while","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait_while","()","<p>Calls wait repeatedly while the given block yields a truthy value.\n"]]}}