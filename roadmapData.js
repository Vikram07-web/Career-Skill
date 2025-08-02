const roadmapData = {
  "Python": {
    beginner: [
      { topic: "Syntax & Variables", link: "https://www.w3schools.com/python/python_syntax.asp" },
      { topic: "Data Types", link: "https://realpython.com/python-data-types/" },
      { topic: "If/Else, Loops", link: "https://www.learnpython.org/en/Loops" },
      { topic: "Functions", link: "https://www.geeksforgeeks.org/python-functions/" },
      { topic: "Lists, Tuples", link: "https://www.programiz.com/python-programming/list" }
    ],
    intermediate: [
      { topic: "File Handling", link: "https://www.w3schools.com/python/python_file_handling.asp" },
      { topic: "OOP", link: "https://realpython.com/python3-object-oriented-programming/" },
      { topic: "Error Handling", link: "https://www.geeksforgeeks.org/python-exception-handling/" },
      { topic: "Modules", link: "https://docs.python.org/3/tutorial/modules.html" },
      { topic: "NumPy, Pandas", link: "https://www.datacamp.com/tutorial/pandas-tutorial-dataframe-python" }
    ],
    advanced: [
      { topic: "Flask/Django", link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django" },
      { topic: "ML & AI", link: "https://www.geeksforgeeks.org/machine-learning/" },
      { topic: "REST APIs", link: "https://realpython.com/api-integration-in-python/" },
      { topic: "Automation", link: "https://realpython.com/python-automation/" },
      { topic: "Deep Learning", link: "https://www.tensorflow.org/learn" }
    ],
    projects: [
      "Weather App",
      "Chatbot",
      "Data Analyzer",
      "Quiz App",
      "Web Scraper"
    ],
    certs: [
      "Google Python Course",
      "Coursera Python for Everybody",
      "edX Introduction to Python",
      "HackerRank Python Certification",
      "Udemy Python Bootcamp"
    ]
  },

  "C++": {
    beginner: [
      { topic: "Syntax & Data Types", link: "https://www.geeksforgeeks.org/basic-input-output-c/" },
      { topic: "Loops", link: "https://www.programiz.com/cpp-programming/loop-types" },
      { topic: "Arrays & Strings", link: "https://www.javatpoint.com/cpp-array" },
      { topic: "Functions", link: "https://www.programiz.com/cpp-programming/function" },
      { topic: "Pointers", link: "https://www.geeksforgeeks.org/pointers-in-c-cpp/" }
    ],
    intermediate: [
      { topic: "OOP Concepts", link: "https://www.programiz.com/cpp-programming/object-class" },
      { topic: "File I/O", link: "https://www.geeksforgeeks.org/file-handling-c-classes/" },
      { topic: "STL", link: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" },
      { topic: "Dynamic Memory", link: "https://www.programiz.com/cpp-programming/dynamic-memory" },
      { topic: "Templates", link: "https://www.geeksforgeeks.org/templates-cpp/" }
    ],
    advanced: [
      { topic: "DSA", link: "https://www.codingninjas.com/studio/library/data-structures-and-algorithms-dsa" },
      { topic: "Game Dev", link: "https://www.udemy.com/course/unrealcourse/" },
      { topic: "OS Programming", link: "https://www.geeksforgeeks.org/operating-systems/" },
      { topic: "Multithreading", link: "https://www.geeksforgeeks.org/multithreading-cpp/" },
      { topic: "Projects", link: "https://www.geeksforgeeks.org/10-c-projects-for-beginners/" }
    ],
    projects: [
      "Bank Management System",
      "File Encryption/Decryption",
      "Student Report Generator",
      "Skill Tracker App",
      "Tic-Tac-Toe Game"
    ],
    certs: [
      "HackerRank C++ Certification",
      "Microsoft C++ Training",
      "Udemy Mastering C++",
      "Coursera C++ For C Programmers",
      "CodingNinjas Advanced C++"
    ]
  },

  "Java": {
    beginner: [
      { topic: "Basics & Syntax", link: "https://www.javatpoint.com/java-syntax" },
      { topic: "Data Types", link: "https://www.programiz.com/java-programming/data-types" },
      { topic: "Loops", link: "https://www.geeksforgeeks.org/loops-in-java/" },
      { topic: "Classes & Objects", link: "https://www.programiz.com/java-programming/class-objects" },
      { topic: "Inheritance", link: "https://www.geeksforgeeks.org/inheritance-in-java/" }
    ],
    intermediate: [
      { topic: "Collections", link: "https://www.geeksforgeeks.org/collections-in-java-2/" },
      { topic: "File I/O", link: "https://www.javatpoint.com/java-filewriter-class" },
      { topic: "Threads", link: "https://www.programiz.com/java-programming/thread" },
      { topic: "Exception Handling", link: "https://www.geeksforgeeks.org/exceptions-in-java/" },
      { topic: "JDBC", link: "https://www.javatpoint.com/example-of-jdbc" }
    ],
    advanced: [
      { topic: "Spring Framework", link: "https://spring.io/projects/spring-framework" },
      { topic: "REST APIs", link: "https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java-based-configuration" },
      { topic: "Android with Java", link: "https://developer.android.com/courses/pathways/android-basics-compose" },
      { topic: "Microservices", link: "https://www.geeksforgeeks.org/microservices-architecture/" },
      { topic: "JVM Tuning", link: "https://www.baeldung.com/jvm-parameters" }
    ],
    projects: [
      "Library Management System",
      "Student Result Portal",
      "Billing System",
      "Chat Messenger",
      "Mini Banking App"
    ],
    certs: [
      "Oracle Java Certification (OCA)",
      "Coursera Java Programming Specialization",
      "Udemy Complete Java Masterclass",
      "CodingNinjas Java Track",
      "edX Java Fundamentals"
    ]
  },

  "HTML/CSS": {
    beginner: [
      { topic: "HTML Basics", link: "https://www.w3schools.com/html/html_intro.asp" },
      { topic: "Text Formatting", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
      { topic: "Links and Images", link: "https://www.w3schools.com/html/html_links.asp" },
      { topic: "Lists and Tables", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" },
      { topic: "Forms and Inputs", link: "https://www.geeksforgeeks.org/html-forms/" }
    ],
    intermediate: [
      { topic: "CSS Selectors", link: "https://www.w3schools.com/css/css_selectors.asp" },
      { topic: "Box Model", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" },
      { topic: "Flexbox", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
      { topic: "Grid Layout", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" },
      { topic: "Responsive Design", link: "https://www.freecodecamp.org/news/responsive-web-design-tutorial/" }
    ],
    advanced: [
      { topic: "CSS Variables", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
      { topic: "Animations and Transitions", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations" },
      { topic: "Media Queries", link: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" },
      { topic: "Accessibility", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
      { topic: "HTML5 Semantic Tags", link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" }
    ],
    projects: [
      "Personal Portfolio Website",
      "Blog Template",
      "Product Landing Page",
      "Simple Resume Webpage",
      "Registration Form"
    ],
    certs: [
      "freeCodeCamp Responsive Web Design Certification",
      "Meta Front-End Developer Certificate (Coursera)",
      "HTML & CSS Certification by W3Schools",
      "Udemy Web Design for Beginners",
      "LinkedIn Learning Web Dev Essentials"
    ]
  },

  "Machine Learning": {
    beginner: [
      { topic: "Linear Regression", link: "https://www.geeksforgeeks.org/linear-regression-in-machine-learning/" },
      { topic: "Logistic Regression", link: "https://www.analyticsvidhya.com/blog/2021/08/a-simple-guide-to-logistic-regression-in-machine-learning/" },
      { topic: "Decision Trees", link: "https://www.javatpoint.com/machine-learning-decision-tree-classification-algorithm" },
      { topic: "KNN", link: "https://www.ibm.com/topics/knn" },
      { topic: "Naive Bayes", link: "https://www.geeksforgeeks.org/naive-bayes-classifiers/" }
    ],
    intermediate: [
      { topic: "SVM", link: "https://www.javatpoint.com/machine-learning-support-vector-machine-algorithm" },
      { topic: "Random Forest", link: "https://www.ibm.com/topics/random-forest" },
      { topic: "Clustering (K-Means, DBSCAN)", link: "https://www.geeksforgeeks.org/ml-k-means-algorithm/" },
      { topic: "PCA", link: "https://builtin.com/data-science/step-step-explanation-principal-component-analysis" },
      { topic: "Feature Engineering", link: "https://towardsdatascience.com/a-feature-engineering-and-feature-selection-guide-for-machine-learning-8b808d1ecfa9" }
    ],
    advanced: [
      { topic: "Neural Networks", link: "https://www.ibm.com/topics/neural-networks" },
      { topic: "CNNs", link: "https://cs231n.github.io/convolutional-networks/" },
      { topic: "RNNs & LSTMs", link: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
      { topic: "Transformers", link: "https://huggingface.co/docs/transformers/index" },
      { topic: "Reinforcement Learning", link: "https://www.geeksforgeeks.org/what-is-reinforcement-learning/" }
    ],
    projects: [
      "Spam Email Detector",
      "Stock Price Predictor",
      "Movie Recommendation System",
      "Image Classifier",
      "Chatbot with ML"
    ],
    certs: [
      "Coursera Machine Learning by Andrew Ng",
      "Udemy Machine Learning A-Z",
      "fast.ai Practical Deep Learning",
      "Google TensorFlow Certification",
      "DataCamp Machine Learning Scientist"
    ]
  },

  "Data Science": {
    beginner: [
      { topic: "Python for Data Science", link: "https://www.datacamp.com/tracks/data-scientist-with-python" },
      { topic: "Data Wrangling", link: "https://towardsdatascience.com/the-ultimate-guide-to-data-wrangling-95d74d8b2b3a" },
      { topic: "Exploratory Data Analysis", link: "https://www.analyticsvidhya.com/blog/2021/08/exploratory-data-analysis-eda/" },
      { topic: "Data Visualization", link: "https://seaborn.pydata.org/tutorial.html" },
      { topic: "Basic Statistics", link: "https://www.simplilearn.com/tutorials/statistics-tutorial/statistics-for-data-science" }
    ],
    intermediate: [
      { topic: "SQL for Data Science", link: "https://www.coursera.org/learn/sql-for-data-science" },
      { topic: "Probability & Distributions", link: "https://www.khanacademy.org/math/statistics-probability" },
      { topic: "Hypothesis Testing", link: "https://towardsdatascience.com/statistical-hypothesis-testing-in-python-a0dc89e169ce" },
      { topic: "Feature Engineering", link: "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/" },
      { topic: "Time Series Analysis", link: "https://www.geeksforgeeks.org/time-series-analysis-in-python/" }
    ],
    advanced: [
      { topic: "Big Data (Hadoop, Spark)", link: "https://spark.apache.org/docs/latest/" },
      { topic: "Machine Learning Models", link: "https://scikit-learn.org/stable/" },
      { topic: "Deep Learning for Data Science", link: "https://keras.io/" },
      { topic: "MLOps", link: "https://ml-ops.org/" },
      { topic: "Data Engineering", link: "https://www.databricks.com/glossary/data-engineering" }
    ],
    projects: [
      "Covid-19 Data Dashboard",
      "Sales Forecasting",
      "Customer Churn Prediction",
      "Fraud Detection",
      "Social Media Sentiment Analysis"
    ],
    certs: [
      "IBM Data Science Professional Certificate",
      "Google Data Analytics Professional",
      "Coursera Data Science Specialization (Johns Hopkins)",
      "Udemy Data Science Bootcamp",
      "edX Data Science MicroMasters"
    ]
  },

  "Cybersecurity": {
    beginner: [
      { topic: "Networking Basics", link: "https://www.geeksforgeeks.org/basics-computer-networking/" },
      { topic: "Linux Basics", link: "https://linuxjourney.com/" },
      { topic: "Cryptography Basics", link: "https://www.khanacademy.org/computing/computer-science/cryptography" },
      { topic: "Firewalls & VPNs", link: "https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html" },
      { topic: "Security Fundamentals", link: "https://www.coursera.org/learn/ibm-cyber-security-basics" }
    ],
    intermediate: [
      { topic: "Penetration Testing", link: "https://www.geeksforgeeks.org/introduction-to-penetration-testing/" },
      { topic: "Web Security (OWASP)", link: "https://owasp.org/www-project-top-ten/" },
      { topic: "Incident Response", link: "https://www.cisa.gov/topics/cyber-threats-and-advisories/incident-management" },
      { topic: "Malware Analysis", link: "https://www.malwarebytes.com/malware" },
      { topic: "SIEM Tools", link: "https://www.ibm.com/topics/siem" }
    ],
    advanced: [
      { topic: "Ethical Hacking", link: "https://www.eccouncil.org/ethical-hacking/" },
      { topic: "Digital Forensics", link: "https://www.sans.org/digital-forensics/" },
      { topic: "Cloud Security", link: "https://www.coursera.org/learn/cloud-security" },
      { topic: "Zero Trust Security", link: "https://www.microsoft.com/en-us/security/business/zero-trust" },
      { topic: "Advanced Threat Hunting", link: "https://www.splunk.com/en_us/data-insider/what-is-threat-hunting.html" }
    ],
    projects: [
      "Keylogger",
      "Password Cracker",
      "Vulnerability Scanner",
      "Secure Chat Application",
      "Wi-Fi Sniffer"
    ],
    certs: [
      "CompTIA Security+",
      "Certified Ethical Hacker (CEH)",
      "Cisco CCNA Security",
      "Offensive Security Certified Professional (OSCP)",
      "GIAC Security Essentials (GSEC)"
    ]
  },

  "SQL": {
    beginner: [
      { topic: "Basic Queries (SELECT, WHERE)", link: "https://www.w3schools.com/sql/sql_select.asp" },
      { topic: "Joins", link: "https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/" },
      { topic: "Aggregate Functions", link: "https://www.geeksforgeeks.org/sql-aggregate-functions/" },
      { topic: "Constraints", link: "https://www.javatpoint.com/sql-constraints" },
      { topic: "Indexes", link: "https://www.geeksforgeeks.org/indexes-in-sql/" }
    ],
    intermediate: [
      { topic: "Stored Procedures", link: "https://www.sqlshack.com/what-is-a-stored-procedure/" },
      { topic: "Triggers", link: "https://www.geeksforgeeks.org/sql-triggers/" },
      { topic: "Views", link: "https://www.sqlservertutorial.net/sql-server-views/" },
      { topic: "Transactions", link: "https://www.geeksforgeeks.org/sql-transactions/" },
      { topic: "Subqueries", link: "https://www.geeksforgeeks.org/sql-sub-queries/" }
    ],
    advanced: [
      { topic: "Database Design & Normalization", link: "https://www.geeksforgeeks.org/database-normalization/" },
      { topic: "Query Optimization", link: "https://www.geeksforgeeks.org/sql-query-optimization-tips-tricks/" },
      { topic: "Window Functions", link: "https://www.geeksforgeeks.org/sql-window-functions/" },
      { topic: "CTEs & Recursive Queries", link: "https://learnsql.com/blog/recursive-sql-cte/" },
      { topic: "Data Warehousing", link: "https://www.geeksforgeeks.org/what-is-data-warehouse/" }
    ],
    projects: [
      "Library Database",
      "Employee Management System",
      "E-commerce Database",
      "Hospital Management Database",
      "Banking Transactions Database"
    ],
    certs: [
      "Microsoft SQL Server Certification",
      "Oracle Database SQL Certified Associate",
      "Coursera SQL for Data Science",
      "Udemy The Complete SQL Bootcamp",
      "DataCamp SQL Fundamentals"
    ]
  },

  "Cloud": {
    beginner: [
      { topic: "Cloud Basics", link: "https://aws.amazon.com/what-is-cloud-computing/" },
      { topic: "AWS Fundamentals", link: "https://aws.amazon.com/training/awsacademy/" },
      { topic: "Azure Basics", link: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview" },
      { topic: "Google Cloud Basics", link: "https://cloud.google.com/training" },
      { topic: "Cloud Deployment Models", link: "https://www.geeksforgeeks.org/cloud-deployment-models/" }
    ],
    intermediate: [
      { topic: "Cloud Storage", link: "https://aws.amazon.com/s3/" },
      { topic: "Cloud Networking", link: "https://cloud.google.com/architecture/networking" },
      { topic: "Serverless Computing", link: "https://aws.amazon.com/serverless/" },
      { topic: "Containerization (Docker)", link: "https://www.docker.com/resources/what-container/" },
      { topic: "Kubernetes", link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }
    ],
    advanced: [
      { topic: "Cloud Security", link: "https://learn.microsoft.com/en-us/security/zero-trust/deploy/azure-zero-trust" },
      { topic: "DevOps on Cloud", link: "https://aws.amazon.com/devops/" },
      { topic: "Multi-Cloud Strategy", link: "https://www.ibm.com/topics/multicloud" },
      { topic: "Cloud Migration", link: "https://cloud.google.com/learn/what-is-cloud-migration" },
      { topic: "AI/ML on Cloud", link: "https://cloud.google.com/products/ai" }
    ],
    projects: [
      "Deploy Website on AWS",
      "Cloud-based Chat Application",
      "Serverless To-do App",
      "Data Pipeline on Cloud",
      "Kubernetes Cluster Setup"
    ],
    certs: [
      "AWS Certified Solutions Architect",
      "Microsoft Azure Fundamentals",
      "Google Associate Cloud Engineer",
      "IBM Cloud Professional Architect",
      "Coursera Cloud Computing Specialization"
    ]
  },

  "JavaScript": {
    beginner: [
      { topic: "Introduction to JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" },
      { topic: "Variables and Data Types", link: "https://www.w3schools.com/js/js_variables.asp" },
      { topic: "Operators in JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators" },
      { topic: "Functions", link: "https://javascript.info/function-basics" },
      { topic: "DOM Manipulation Basics", link: "https://www.w3schools.com/js/js_htmldom.asp" }
    ],
    intermediate: [
      { topic: "ES6 Features", link: "https://www.javascripttutorial.net/es6/" },
      { topic: "Asynchronous JavaScript (Callbacks, Promises, Async/Await)", link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
      { topic: "Event Handling", link: "https://www.w3schools.com/js/js_events.asp" },
      { topic: "JavaScript Modules", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
      { topic: "Error Handling", link: "https://javascript.info/try-catch" }
    ],
    advanced: [
      { topic: "Closures & Scope", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" },
      { topic: "Prototypes & Inheritance", link: "https://javascript.info/prototype-inheritance" },
      { topic: "Event Loop & Concurrency Model", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" },
      { topic: "Design Patterns in JavaScript", link: "https://refactoring.guru/design-patterns/javascript" },
      { topic: "Performance Optimization", link: "https://web.dev/fast/" }
    ],
    projects: [
      "To-do List App",
      "Weather App using API",
      "Calculator",
      "Quiz App",
      "Chat Application"
    ],
    certs: [
      "freeCodeCamp JavaScript Algorithms and Data Structures",
      "HackerRank JavaScript (Intermediate) Certificate",
      "W3Schools JavaScript Certification",
      "Coursera JavaScript for Beginners",
      "Udemy Modern JavaScript Bootcamp"
    ]
  }
};
