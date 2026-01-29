const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    
    const formData = new FormData(e.target);

    try {
      // We change "/favicon.ico" to "/" 
      // This is the most reliable way when you don't have static assets yet
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
