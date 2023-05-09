const CSA = [

    {
        question: "1. What section on a task record would you use to see the most recent update made to a record?",
        optionA:[ { opt:"a)Journal"},{opt:"b) Timeline"},
         {opt:"c)     update log"}
        //  "d)     audit log",
        //  "e)       diary",
        //  "f)     activity",
       ],
       correct:"a)Journal",
       
    }, 
       {
        question: "2. What are examples of UI actions, relating to lists? choose four answers?",
        optionA:[{opt: "a)       List buttons"}, 
        // "b)      list context menu",
        //  "c)       list choices",
         {opt:"d)      list links"}]
        //  "e)      list control",
        //  "f)        lists overwrite"]
         ,correct:"list links"
        },
    //  {
    //     question: "3. Which feature allows you to automate business logic for a particular application or process such as approvals, task, notifications, and record Operations?",
    //     optionA:[ "a) Flows",
    //      "b)      Action sequence",
    //      "c)       Flow diagrams",
    //      "d)      action sets",
    //      "e)      task flows",
    //    ],correct:"task flows"
    // },
]
    export default CSA;
//  { 
//     question: "4. When a Flow runs an action, it generates a runtime value, Which stays the same for the duration of the flow.What is the name of that runtime value?",
//         optionA:[ "a)       data pill runtime value",
//          "b)      sequence runtime value",
//          "c)       starting runtime value",
//          "d)      trigger runtime value",
//          "e)      input runtime value",
//  ],correct:"},
// {   
//         question:"%.The employee on- boarding team has asked for a way for managers to order computers, monitors, business cards, and cell phones for new employees.how would you proceed to meet this requirement ? ",
// optionA:[ "a)       create order guide",
//  "b)      create requested item",
//  "c)       create record producer",
//  "d)      create on boarding bot",
//        ],correct:"},
//         {
//     question: "6. Which resource would you use to determine if a specific user could contribute to a particular knowledge base?",
//         optionA:[ "a)       User criteria diagnostics",
//      "b)      Sn_kb_author role",
//      "c)       User criteria job log",
//      "d)      knowledge author group",
//      "e)      KB author group",
//         ],correct:"},
        
//      {
//         question: "7. If a knowledge base has no access details specified.What users are able to read articles in that knowledge base?",
//             optionA:[ "a)       no users",
//      "b)      itil users",
//      "c)       users with kb_user role",
//      "d)      any user with an articles for permalink",
//      "e)      any active user",
    
// ],correct:"}, 
// {
//     question: "8.While showing a customer their incident form, they ask to change the priority field title to display their internal terminology Pvalue. how would you do that?, choose two answers ? ",
// optionA:[ "a)       right click on priority and select configure dictionary",
//      "b)      right click on priority and select configure label",
//      "c)       right click on priority and select configure display settings",
//      "d)      right click on priority and select configure column",
    
// ],correct:"}, 
// {
//     question: "9. What access does a user need to be able to import articles to a knowledge base?",
//         optionA:[ "a)       Sn_Knowledge_import",
//      "b)      Sn_knowledge_contribute",
//      "c)       can contribute",
//      "d)      sn_knowledge_write",
//      "e)      can write",
//      "f)        can import",

// ],correct:"}, {
//     question: "10. What controls the publishing and retiring process for knowledge articles?",
//         optionA:[ "a)       workflow designer",
//      "b)      workflows",
//      "c)       state life cycle",
//      "d)      approval policies",
//      "e)      approval definitions",

// ],correct:"},
//  {
//     question: "11. What is an advantage of defining relationship types between ci classes?",
//         optionA:[ "a)       Improves data quality, as the CIs will automatically be related When CMDB is activated.",
//              "b)      it prevents users from relating CIs incorrectly.",
//      "c)       it automates the loading of the ci dependency view.",
//      "d)      makes relating CIs easier, because predefined relationship suggests Which type of CIs should be",
    
// ],correct:"}, 
// {
//     question: "12. When using the CI dependency view, how would you view the relationship between one CI and another CI?",
//         optionA:[ "a)       right click, view relationship",
//      "b)      Click on the plus to expand cluster",
//      "c)       click down arrow, view relationship",
//      "d)      Hover on connection line",
//     ],correct:"},
//      {
//         question: "13. Of the Ci tables,Which is a base table of the CMDB hierarchy?",
//             optionA:[ "a)       ECMDB",
//      "b)      Cmdb_rel_ci",
//      "c)       Cmdb_ci",
//      "d)      cmdb",
//      "e)      Ecmdb_rel_ci",
//      "f)        Ecmdb_ci",
    
// ],correct:"}, 
// {
//     question: "14. What table acts as a staging area for records imported from a data source?",
//         optionA:[ "a)       staging table",
//      "b)      temp table",
//      "c)       transform table",
//      "d)      import set row table",

// ],correct:"},
//  {
//     question: "15. Which field (or fields) is used as a unique key during imports?",
//         optionA:[ "a)       Sys IDs",
//      "b)      match fields",
//      "c)       coalesce fields",
//      "d)      key fields",
//     16.
// ],correct:"}, {
//     question: "16. What module enables an administrator to define destinations for imported data on any ServiceNow table?",
//         optionA:[ "a)       field transform",
//      "b)      schema map",
//      "c)       import map",
//      "d)      transform map",
//         ],correct:"},
//      {
//         question: "17. The customer wants all users to have access to the records in the offerings table.What setting on access control definition would you use to grant access to all of the offering table records?",
//             optionA:[ "a)       Offering. None",
//      "b)      None. Offering",
//      "c)       Offering. Name",
//      "d)      Offering",
//    ],correct:"},
//     {
//         question: "18.  a manager wants to review a snapshot of month end sales performance data, as compared to sales target.in addition, the manager wants to able to see those monthly numbers trended overtime and forecasted into the future.What capability do you suggest for this manager?",
//             optionA:[ "a)       schedule reports, accustoms snapshot table and projection report",
//      "b)      scheduled reports, a custom snapshot table and a trend report.",
//      "c)       performance analytics.",
//      "d)      scheduled reports and excel",
//      "e)      key performance indicators.",
    
// ],correct:"}, {
//     question: "19. Which component of a table contains a piece of data for one record?",
//         optionA:[ "a)       Field",
//      "b)      Factor",
//      "c)       data point",
//      "d)      item",
//      "e)      element",
    
// ],correct:"}, 
// {
//     question: "20. What do you click When you have made modifications to your report, and you want to see the results without saving ? ",
// optionA:[ "a)       Run",
//      "b)      Execute",
//      "c)       Test",
//      "d)      Preview",
//      "e)      try it",
//    ],correct:"},
//     {
//         question: "21.  The report designer contains different sections for configuring your report.Which section is used to specify grouping and calculations to be run against the data?",
//             optionA:[ "a)       Data",
//      "b)      Format",
//      "c)       Configure",
//      "d)      Style",
//      "e)       group by",

// ],correct:"}
// , {
//     question: "22. What section on the notes tab shows the history of the work documented on the record?",
//         optionA:[ "a)       Journal",
//      "b)      Activity",
//      "c)       Timeline",
//      "d)      audit log",
//      "e)      diary",
// ],correct:"},
// {
//       question:"23. Your customer wants to update a notification, so it is sent to the caller and also to the manager of the caller.how would you approach this requirement ? ",
// optionA:[ "a) set Who will receive to subscribable",
//      "b)      on the send to tab, add caller field, dot walk to caller’s manager to add manager.",
//      "c)       Create workflow and include a notification in the workflow",
//      "d)      on Who will receive tab, select copy manager checkbox.",
//          "e)      on Who will receive tab, add caller field, dot walk to caller’s Manager to add managers.",
// ],correct:"}, 
//  {
//     question: " 24. An IT User calls the service desk Because they need to work on task records.all they can see his self - service on their homepage,When they log into the service now instance. ],correct:"},{  question:"What issue could explain this ? ", choose two answers?",
//         optionA:[ "a)       their user record was not approved by their managers",
//      "b)      that user account does not belong to any group Which contains the ITIL role.",
//          "c)       their user account is not logged in property",
//      "d)      their user account does not have itil role",
//      "e)      That user account failed LDAP authentication",
    
// ],correct:"}, {
//     question: "25.What type of rules specify Which user groups are responsible to work on different types of tasks ? ",
// optionA:[ "a)       On call",
//      "b)      Assignment",
//      "c)       Routing",
//      "d)      Calendar",
//      "e)      Escalation",
//        ],correct:"}, {
//         question: "26. using the module.system properties > my company.What branding options are available?",
//             optionA:[ "a)       banner image, banner text, colour scheme",
//      "b)      company name, company logo",
//      "c)       banner image, banner text",
//      "d)      company name, company logo, colour scheme",
//     ],correct:"},
//     27.   From form designer, how would you define a section, so it displays as a tab ? ",
// optionA:[ "a)       Click the gear and check the tab option
//      "b)      Click context menu > configure tabs
//      "c)       add .tab to the end of the section name
//      "d)      add _tap to the end of the section name
//      "e)      name the section
//     28.
// ],correct:"}, {
//     question: "When looking at a long list of records, you want to quickly filter, to show only those ],correct:"},{  question:"Which have category of hardware.How might you do that ? ",
// optionA:[ "a)       on breadcrumbs, click > icon, type hardware and click enter
//      "b)      right click on the magnifier, type hardware and click enter
//      "c)       click funnel icon, type hardware and click enter.
//      "d)      on the list, locate and right click on the value Hardware, select show matching
//      "e)      on the category column header, right click and select show > hardware.
//     29.   groups are defined at
// ],correct:"}, {
//     question: "What?",
//         optionA:[ "a)       An escalation pod
//      "b)      a collection of subject matter experts
//      "c)       a department
//      "d)      A team of users
//      "e)      A correction of users
//     30.
// ],correct:"}, {
//     question: "What is the best way to learn about performance analytics?",
//         optionA:[ "a)       use the ServiceNow wiki
//      "b)      schedule a demo with ServiceNow sales team
//      "c)       take a service now performance analytics course on now learning
//      "d)      activate the plugin on your production environment and start the default data collectors.
//     31.   A subject matter expert routinely receives task
// ],correct:"}, {
//     question: "Which have been worked by first and level support before receiving the assignment. ],correct:"},{  question:"What could you suggest, to make it easier for the expert to read only the work notes in the activity log ? ",
// optionA:[ "a)       click contexts menu > work notes view
//      "b)      click funnel icon and select only work notes
//      "c)       click Context menu > history
//      "d)      click personalise icon and select activity stream
//      "e)      right click form header > form layout > add work note section
//     32.   for a customer’s inventory application, several inventory applications fields on a needed - on inventory ticket.this ticket will be assigned to inventory support team members.how would you start to implement this requirement ? ",
// optionA:[ "a)       create inventory table as a new base table. then add inventory specification fields as needed.
//      "b)      create inventory table with the inventory specification fields. in create view between the inventory and task table.
//      "c)       create the inventory table with the inventory specification fields. then create many to many relationships between the inventory and the task table.
//      "d)      create inventory table as an extended table from the task table. then add the inventory specification fields, as needed.
//     33.
// ],correct:"}, {
//     question: "When using the report designer, it is best practice to make copy of an existing report then make modification to your copy of that report. ],correct:"},{  question:"When viewing the report inside the designer, how would you make a copy of the report ? ",
// optionA:[ "a)       click on the paper icon and select create new.
//      "b)      click on the down triangle and select insert and stay
//      "c)       click on the properties tab and select save as
//      "d)      click on context menu and select insert and stay
//      "e)      click on the funnel icon and create copy
//     34.   Samrat Dhumal
//     35.
// ],correct:"}, {
//     question: "While testing a catalog item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob Smith, but not for any of the other requests. ],correct:"},{  question:"What could explain the issue ? ",
// optionA:[ "a)       the manager does not have a delegate assigned
//      "b)      there is a business rule, excluding bob Smith with from any approvals
//      "c)       the Bob Smith user account, does not have a manager specified
//      "d)      Bob Smith is a VIP
//      "e)      Bob Smith does not have a delegate set up on his account
//     36.
// ],correct:"}, {
//     question: "What module do you use to access the report that are available to you?",
//         optionA:[ "a)       self-service> my reports
//      "b)      reports> overview
//      "c)       report's> home page
//      "d)      report's> view/run
//      "e)      self-service> my dashboards
//     37.
// ],correct:"}, {
//     question: "Why is it recommended that you Limit update sets to maximum of 100 records?", Choose 2 answers ? ",
// optionA:[ "a)       Comply with ISO audit requirements
//      "b)      smaller update sets can be imported to production during business hours
//      "c)       reduce potential conflicts
//      "d)      improve ability to troubleshoot issues with the default update set
//      "e)      make it easier to identify and review changes
//      "f)        keeps update set logs shorter
// g)       Make it easier for developers to organise their work
//     38.
// ],correct:"}, {
//     question: "Which flow components allow you to specify ],correct:"},{  question:"When a flow should be run ? ",
// optionA:[ "a)       Trigger and condition
//      "b)      trigger and condition pill
//      "c)       condition and table
//      "d)      scope and trigger condition
//      "e)      trigger criteria and clock
//     39.   a customer has asked for the following updates to a form: make resolution code mandatory, ],correct:"}, {
//         question: "When state is changed to resolved, hide major incident checkbox, unless logged in user as major incident manager role.  ],correct:"},{  question:"What type of rules would you use to implement this requirement ? ",
// optionA:[ "a)       field Lipper
//      "b)      UI policy and actions
//      "c)       UI design
//      "d)      dictionary design
//      "e)      form constraint
//     40.
// ],correct:"}, {
//     question: "What utility enables process owners to other cross enterprise workflows within a single unified process?",
//         optionA:[ "a)       Flow editor
//      "b)      floor designer
//      "c)       workflow manager
//      "d)      process owner dashboard
//      "e)      process workflow designer
//      "f)        process automation designer
// g)       process flow manager
//     41.
// ],correct:"}, {
//     question: "Which type of script runs in the browser?",
//         optionA:[ "a)       flow designer actions
//      "b)      script includes
//      "c)       business rules
//      "d)      ACL scripts
//      "e)      transform maps
//      "f)        UI policies and client scripts
//     42.   it time for end user is based on the round trip between the client and the server. ],correct:"}, {
//         question: "What activities are included in the round trips?",
//             optionA:[ "a)       Submit+ query
//      "b)      request+ response
//      "c)       insert+ verify
//      "d)      save+ update
//      "e)      write+ read
//     43.
// ],correct:"}, {
//     question: "What instance resource allows you to access guided tours, information about actions, and instruction on how to use inputs and outputs in your flow?",
//         optionA:[ "a)       Getting started
//      "b)      Wiki
//      "c)       help panel (],correct:"},{  question mark Icon) (Choose this ans if getting started is not option) 
//      "d)      Docs
//      "e)      user guide
//      "f)        community
//     44.   here is as example of the criteria set for a knowledge base: Companies: ACME North America, department: HR, groups: ACME MANAGERS, Match all: yes.in this example, ],correct:"}, {
//         question: "What user would have access to this knowledge base?",
//             optionA:[ "a)       members of the acme managers group, and HR department, regardless of geography.
//      "b)      Employees of the ACME North America, ],correct:"},{  question:"Who are members of HR department or the ACME managers group
//      "c)       members of the ACME Manager group, ],correct:"},{  question:"Who are also members of HR departments and part of ACME North America
//      "d)      users ],correct:"},{  question:"Which are members of either ACME North America, or HR department or ACME Managers group
//     45.
// ],correct:"}, {
//     question: "What is a set of condition applied to a table list to show as subset of the data?",
//         optionA:[ "a)       Mask
//      "b)      Divisor
//      "c)       Filter
//      "d)      Funnel
//      "e)      Query
//     46.
// ],correct:"}, {
//     question: "What are the different ways you can create a favourite for a particular record?", Choose two answers ? ",
// optionA:[ "a)       from the record related links, click add favourites
//      "b)      from the record form header, click the star icon
//      "c)       from the record form header, click additional action menus and select create favourite
//      "d)      from list, click the star icon
//      "e)      from list, drag record number to favourites on the navigator.
//      "f)        from the record form header, click paperclip icon.
//     47.   if you have the impersonate role, ],correct:"}, {
//         question: "What type of user are you not able to impersonate?",
//             optionA:[ "a)       Extended security admin
//      "b)      security desk users
//      "c)       special agents
//      "d)      government customers
//      "e)      security incident response users
//     48.   on a list, ],correct:"}, {
//         question: "What part of the table, does each column show?",
//             optionA:[ "a)       an element
//      "b)      a relationship
//      "c)       a record
//      "d)      a attribute
//      "e)      a Field
//     49.
// ],correct:"}, {
//     question: "Which type of field allows you to enter freely using letters, numbers, and special characters?",
//         optionA:[ "a)       multi line text
//      "b)      single line text
//      "c)       open text
//      "d)      text
//      "e)      string
//     50.   To quickly return to your instances home page, ],correct:"}, {
//         question: "What item would you click?",
//             optionA:[ "a)       star icon
//      "b)      shortcuts icon
//      "c)       navigation header
//      "d)      gear icon
//      "e)      instance logo
//      "f)        user menu
//     51.
// ],correct:"}, {
//     question: "Which admin role is required to make changes to high security setting?",
//         optionA:[ "a)       Ad_admin
//      "b)      High_sec_admin
//      "c)       Sn_ad_admin
//      "d)      Admin
//      "e)      Security_admin
//     52.   with the admin role, a user would have access to all platform features, functions, and data with ],correct:"}, {
//         question: "What exceptions?",
//             optionA:[ "a)       High security and human resources
//      "b)      human resources and security operations
//      "c)       employee personality identification information and security operations
//      "d)      human resource and enterprise CMDB
//      "e)      security operations and vulnerability response
//     53.   from the my approval module, you want to quickly authorize a request.how can you do this quickly from the list view ? ",
// optionA:[ "a)       right click on the requested state, select approve
//      "b)      right click on the approval number, select approve
//      "c)       select approval record by checking box, click on green check
//      "d)      right click on the approval number, select approved, click green check
//     54.
// ],correct:"}, {
//     question: "What attributes you can manage using system properties> basic configuration UI16?", Choose five answers ? ",
// optionA:[ "a)       default calendar
//      "b)      default region
//      "c)       base theme
//      "d)      preferred browser
//      "e)      font style
//      "f)        banner image
// g) start - up sound
// h)      browser tab title
// i)        animation style
// j)        user photo icon on / off
// k) module text colour
// l)        header background colour 
// m)    default homepage
//     55.
// ],correct:"}, {
//     question: "What module do you use to access the full screen view of connect?",
//         optionA:[ "a)       Connect> dashboard
//      "b)      Connect> workspace
//      "c)       Connect> connect chat
//      "d)      Connect> tools> workspace
//      "e)      Connect> agent workspace
//     56.   A new employee joins the IT department and needs to perform work assigned to network and Hardware groups.how would you set up their access ? ", Choose 3 answers?",
//         optionA:[ "a)       add user account to hardware group
//      "b)      add user account to ACL
//      "c)       add user account to itil group
//      "d)      Create user account
//      "e)      add user account to IT knowledge base
//      "f)        add user account to network group
//     57.
// ],correct:"}, {
//     question: "When would you use the following steps?", i) Homepage admin > pages ii) Right click on homepage record iii) select unload portal page
//     optionA:[ "a)       to add a homepage to an update set
//      "b)      to delete homepage
//      "c)       to publish a homepage to the portal
//      "d)      to retire homepage
//     58.   On a business rule, ],correct:"}, { question: "When setting determines at ],correct:"},{  question:"What points the rule executes. ],correct:"}, {
//         question: "What are the options for specifying that timing?",
//             optionA:[ "a)       Prior to, synchronous, on update
//      "b)      Insert, update, delete, query
//      "c)       Before, synchronous, schedule job, views
//      "d)      Before, after, Async, display
//     59.
// ],correct:"}, {
//     question: "What is the language used for scripting in the ServiceNow?",
//         optionA:[ "a)       Perl
//      "b)      Python
//      "c)       JavaScript
//      "d)      C++
//      "e)      PHP
//      "f)        Glide
//     60.
// ],correct:"}, { question: "Which script can run ],correct:"},{  question:"When a record is displayed, inserted, updated, deleted or ],correct:"}, {
//     question: "When a table is queried?",
//         optionA:[ "a)       client script
//      "b)      business rule
//      "c)       UI script
//      "d)      scheduled job
//      "e)      record rule
//     61.
// ],correct:"}, {
//     question: "What process allows user to create, categorise, review, approve and browse important information in a centralised location that is shared by the entire organization?",
//         optionA:[ "a)       Self-service management
//      "b)      Knowledge-centered management
//      "c)       knowledge management
//      "d)      business information management
//      "e)      information portal management
//     62.
// ],correct:"}, {
//     question: "Which storefront is a single location for accessing prebuilt spokes, to quickly integrate with 3rd party services to build and share content?",
//         optionA:[ "a)       integration portal
//      "b)      integration store
//      "c)       service now spoke store
//      "d)      integration one stop
//      "e)      ServiceNow store
//      "f)        integration spoke hub
// g)       spoke store
//     63.
// ],correct:"}, {
//     question: "Which role can manage multiple knowledge bases?",
//         optionA:[ "a)       Sn_kb_admin
//      "b)      Kb_Admin
//      "c)       Knowledge_admin
//      "d)      Knowledge_base_admin
//     64.   You are creating a catalog item for ordering a new desktop computer.The computer have these options: colour: black or silver, ram: 32 MB or 64 MB, keyboard: standard or economic, monitor: 24 inch or 32 inch.how would you add this option to the catalog item form ? ",
// optionA:[ "a)       add choices
//      "b)      add UI options
//      "c)       add variables
//      "d)      add fields
//     65.   A service catalog project will involve building 80 catalog items.for each of the catalog items, the following fields will be mandatory on the forms:
//     optionA:[ "a)       requested for
//      "b)      requested by
//      "c)       approving manager
//      "d)      delivery instructions
// all of the other variables will be specific to the individual catalog item. ],correct:"}, {
//     question: "What features would you use ],correct:"},{  question:"When designing the catalog item form ? ",
// optionA:[ "a)       create an order guide ],correct:"},{  question:"Which includes all variables; then copy and hide variables as needed.
//          "b)      create one variable set for the four variables; then add the variable set to each of the eighty catalog items
//      "c)       create a variable set template; they apply to all of the catalog items
//      "d)      create a record producer that contains the four fields; then add to the record producer related list on the catalog items
//      "e)      create a floor designer action, with variable set data pill; then apply flow to all of the eighty catalog items


//     66.
// ],correct:"}, {
//     question: "What is the best practice regarding data imports?",
//         optionA:[ "a)       plan time before your import to remove obsolete or inaccurate data.
//      "b)      use extremely large import sets, instead of multiple large import sets.
//      "c)       adjust your transform maps, after the data is loaded into the target table
//      "d)      create a new import set table for each new data load
//      "e)      monitor data quality and clean imported data using the data scrub workspace
//     67.
// ],correct:"}, {
//     question: "Which service now resource can be used as a blueprint to map your IT services to service now?",
//         optionA:[ "a)       Configuration management database (CMD"b)
//      "b)      now learning
//      "c)       service now wiki
//      "d)      service mapping guided setup
//      "e)      common service data model (CSDM)
//      "f)        IT service management (ITSM)
//     68.
// ],correct:"}, {
//     question: "What are the steps for importing data using an import set?",
//         optionA:[ "a)       Identify source: import transform map; run transformer; verify import
//      "b)      Load the data; create transform map; transform data; clean up import table
//      "c)       select source file; run auto map; transform data; clean up target table
//      "d)      set up LDAP; run auto map; transform data; clean up target table
//     69.   you have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval.the approvers and users should be automatically notified at each approval level. ],correct:"}, {
//         question: "What feature would you use to manage the approvals and notification?",
//             optionA:[ "a)       Flows
//      "b)      approval criteria
//      "c)       approval chains
//      "d)      approval delegates
//      "e)      parent child approvers
//     70.
// ],correct:"}, {
//     question: "When importing data, ],correct:"},{  question:"What happens to imported rows, if no coalesce field is specified ? ",
// optionA:[ "a)       all rows are treated as new records, but error will be flagged in the import log
//      "b)      duplicate rows are rejected from the import
//      "c)       all rows are treated as new records. no existing records were updated
//      "d)      all rows or rejected from the import, as coalesce field is required
//     71.
// ],correct:"}, {
//     question: "What tool allows you to drag and drop to specify links between source fields on an import set table and destination fields on any service now table?",
//         optionA:[ "a)       Mapping assist utility
//      "b)      import workspace
//      "c)       data source map
//      "d)      import designer
//      "e)      transform designer
//      "f)        transform dashboard
//     72.
// ],correct:"}, { question: "When importing data from a spreadsheet ],correct:"},{  question:"Which step defines ],correct:"}, {
//     question: "Where the incoming data columns will be written in the receiving tables?",
//         optionA:[ "a)       schedule transform
//      "b)      select data source
//      "c)       field mapping 
//      "d)      load data
//      "e)      create transform app
//     73.   to quickly return to a homepage you were using 5 minutes ago, ],correct:"}, {
//         question: "Which item would you click?",
//             optionA:[ "a)       gear icon
//      "b)      clock icon
//      "c)       right click history
//      "d)      homepage icon
//      "e)      history module
//      "f)        start icon
//     74.
// ],correct:"}, {
//     question: "What is the most important thing to remember about activating a plugin?",
//         optionA:[ "a)       install dependent plugins first
//      "b)      tick the box for adding demo data
//      "c)       plugins once installed cannot be uninstalled
//      "d)      submit HI ticket to get Authorization
//      "e)      plugins are prohibited in personal developer instances
//     75.   Certain tables have a prefix like HR_. ],correct:"}, {
//         question: "Which kind of tables has a name that starts with a custom prefix?",
//             optionA:[ "a)       excluded table
//      "b)      scooped application table
//      "c)       system table
//      "d)      explanation table
//      "e)      Xray search table
//     76.   within the report library, there are many baseline reports that can be used for learning about reports. ],correct:"}, {
//         question: "What could you search for to locate ITIL best practice indicator reports?",
//             optionA:[ "a)       KPI
//      "b)      ITSM
//      "c)       ITIL
//      "d)      PA
//      "e)      Sn_itil
//     77.
// ],correct:"}, {
//     question: "While on an incident record, how would you add a tag for” special Handling” To the record?",
//         optionA:[ "a)       click on the context menu, select add tag, type special handling, press enter
//      "b)      on the special handling field, check the box
//      "c)       on the tag field, select special handling from the choice list
//      "d)      click on the …. icon, click add tag, type special handling, press enter
//     78.
// ],correct:"}, {
//     question: "When using context menu on list, form, and column headings, ],correct:"},{  question:"What are the quick way to access the menus ? ", choose two answers?",
//         optionA:[ "a)       right click on the list, form, or column heading
//      "b)      click on context menu icon
//      "c)       shift click on the list, form, or column heading
//      "d)      double click on the list, form, or column heading.
//      "e)      Ctrl M
//     79.
// ],correct:"}, {
//     question: "Which icon in the banner do you use to turn on the application picker and the update set picker?",
//         optionA:[ "a)       Magnifier
//      "b)      check box
//      "c)       ],correct:"},{  question mark
//      "d)      Gear
//      "e)      chat bubbles
//     80.   A new service desk employee in Latin America Complaints that the create dates and time are incorrect on their incident list. ],correct:"}, {
//         question: "What would you suggest to fix this issue?",
//             optionA:[ "a)       use the system properties to correct the instance time zone
//      "b)      have them correct the time zone on their computer
//      "c)       recommend they use Chrome instead of explorer
//      "d)      Have them use the gear icon to set the employees time zone
//      "e)      have them clear their cache
//     81.   A department uses SLA data extensively to run reports.they keep asking for help with building reports off of the same set of tables.they seem to be conducted by dot walking. ],correct:"}, {
//         question: "What could you do to make it easier for them to build their reports?",
//             optionA:[ "a)       System table flow house their reporting data
//      "b)      write knowledge articles explaining how to do dot walking
//      "c)       create a data source for them and show them how to use it
//      "d)      send a team member to a reporting class knock out any untrained users
//      "e)      show them how to export to excel format
//     82.
// ],correct:"}, {
//     question: "What are examples of core tables in the ServiceNow platform?",
//         optionA:[ "a)       Team, party, awards
//      "b)      User, task, incident
//      "c)       Work, caller, timecard
//      "d)      base configuration item, configuration item, base task
//     83.
// ],correct:"}, {
//     question: "What are benefits of assigning work tasks to a group, rather than to an individual?", choose five answers ? ",
// optionA:[ "a)       group members can avoid task ],correct:"},{  question:"Which are nearing SLA breach
//      "b)      group members can pick task based on the SLA urgency
//      "c)       Site support members can pick task based on location
//      "d)      groups can assign task to users based on on-call schedules
//      "e)      group can assign task to users based on skills
//      "f)        groups can assign task to user based on availability
// g)       group members can pick task, based on highest priority
// h)      group members can choose their preferred task from my groups works
//     84.
// ],correct:"}, {
//     question: "What sections on the CI form, can you find information about the other CIs associated with your CI?",
//         optionA:[ "a)       related list
//      "b)      related items
//      "c)       affected CI tab
//      "d)      related links
//      "e)      child CI tab
//     85.   A manager wants to run a report showing how many service requests have been fulfilled for business cards since the beginning of the year. ],correct:"}, {
//         question: "What table would they select for building this report?",
//             optionA:[ "a)       Request[sc_req],correct:"
//      "b)      requested item[sc_req_item],correct:"
//      "c)       task[task],correct:"
//      "d)      catalog item[sc_cat_item],correct:"
//      "e)      catalog task[sc_task],correct:"
//      "f)        service catalog[sc_catalog],correct:"
//     86.   your customer requires that they be able to monitor
// ],correct:"}, {
//     question: "Which users are performing impersonation in their instance. ],correct:"},{  question:"What would you do to meet that requirement ? ",
// optionA:[ "a)       add the role log write[sn_Log_write],correct:" to the impersonator group
//      "b)      activate the glide.sys.log_impersonation script
//      "c)       create user update set for impersonation tracking
//      "d)      on the impersonator role record, right click and select create log
//      "e)      from the user icon, select elevate roles
//     87.   sections on a form can appear as: one or two columns, tabs.From form designer, how do you define a section, so it displays as a tab ? ",
// optionA:[ "a)       name the section
//      "b)      add_tab to the end of the section name
//      "c)       add. tab to the end of the section name
//      "d)      click context menu> configure tabs
//      "e)      click the gear and check the tab option
//     88.   a manager is complaining that they can't get the data then they need on a report, because the data resides in two different tables. this data is used for many different reports in their department. you have checked to see if dot walking will meet the requirement and it is not possible. ],correct:"},{  question:"What else might you try to help this manager?",
//     optionA:[ "a)       create a database view
//      "b)      create a report source
//      "c)       create a custom table
//      "d)      export the tables to spreadsheet
//      "e)      create a report template
//     89.   tables can be characterised in multiple ways. ],correct:"}, {
//         question: "Which of this combination is impossible?", choose 2 answers ? ",
// optionA:[ "a)       custom and core
//      "b)      customer and child
//      "c)       base and parent
//      "d)      custom and parent
//      "e)      core and base
//      "f)        child and core
// g)       custom and base
// h)      parent and child
//     90.
// ],correct:"}, {
//     question: "What are advantages of using flow designer?", choose three answers ? ",
// optionA:[ "a)       supports legacy workflows
//      "b)      less manual scripting
//      "c)       enables complicated scripting
//      "d)      reduces technical debt
//      "e)      supports advanced developers
//      "f)        compliments the integration store
// g)       smooth integration with 3rd party systems
//     91.
// ],correct:"}, {
//     question: "What policies are applied to all data entered into the platform via form (UI), import sets or web services?",
//         optionA:[ "a)       data submission policies
//      "b)      data quality policies
//      "c)       data integrity policies
//      "d)      data policies
//      "e)      write policies
//     92.   You have been asked to configure form so an Employee could order a tablet and select the standard accessory options to purchase with it.these Standard options are carrying case, screen cleaner, tablet stand, and screen protector. ],correct:"}, {
//         question: "What approach would you take?", choose three answers ? ",
// optionA:[ "a)       on shopping cart configuration, select options to show the add accessories button
//      "b)      create one catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector
//      "c)       create catalog item for the tablet and add a variable set to the form for the accessory options
//      "d)      Create a record producer and on the form, add a checkbox variable for each accessory options.
//      "e)      create catalog item for the tablet, and on the form, add a checkbox variable for each accessory option
//     93.
// ],correct:"}, {
//     question: "When moving a homepage or dashboard between instances, ],correct:"},{  question:"What must you remember ? ",
// optionA:[ "a)       they are automatically added to the updates set
//      "b)      create a separate update set for them
//      "c)       they can be moved using zip files
//      "d)      they cannot be moved via XML
//      "e)      manually add them to the update set
//      "f)        they cannot be moved via updates set
//     94.
// ],correct:"}, { question: "When be set up with many to many relationships. ],correct:"},{  question:"What is a classic example of a scenario ],correct:"}, {
//     question: "Where the tables could have many to many relationships?",
//         optionA:[ "a)       A task can trigger many workflows and workflow can trigger many tasks
//      "b)      vendors can sell multiple products and products can be sold by multiple vendors
//      "c)       request can contain many items and items can be any item from the catalogs
//      "d)      a configuration item can belong to multiple classes and classes can contain multiple configuration items
//     95.   Your customer wants to add the company’s email banner to each customer Facing email notification.how would you approach this requirement ? ",
// optionA:[ "a)       create a company HTTP email wrapper
//      "b)      create a company email template
//      "c)       create a company CSS package for emails
//      "d)      create a company email header and footer
//     96.
// ],correct:"}, {
//     question: "What catalog tool would you use to create a catalog item or record producer?",
//         optionA:[ "a)       catalog formatter
//      "b)      catalog flow builder
//      "c)       catalog builder
//      "d)      catalog designer
//      "e)      variable designer
//      "f)        form designer
// g)       workflow designer
//     97.   On a form header, ],correct:"}, {
//         question: "What icon would you Click to access template features?",
//             optionA:[ "a)       paper clip
//      "b)      stamp
//      "c)       context menu
//      "d)      more options (….)
//     98.
// ],correct:"}, {
//     question: "Which tab on the knowledge base record, would you use to identify the set of users ],correct:"},{  question:"Who are able to read articles in that knowledge base ? ",
// optionA:[ "a)       can read
//      "b)      access list
//      "c)       accessible to
//      "d)      can access
//     99.
// ],correct:"}, {
//     question: "When adding a related list to a form, you choose the related list from the list collector. ],correct:"},{  question:"What is an example of a related list you might see on the list collector ? ", choose 3 answers?",
//         optionA:[ "a)       Outages > Task number
//      "b)      catalog task> parent
//      "c)       HR case> parent
//      "d)      Problem== parent
//      "e)      release phase== parent
//     100. in flow designer, ],correct:"}, {
//         question: "Where is the data from an action stored so it can be used in subsequent actions in the flow?",
//             optionA:[ "a)       Data pill
//      "b)      data trigger
//      "c)       data element
//      "d)      field icon
//      "e)      field value
//     101.
// ],correct:"}, {
//     question: "Which module would you use to create a new automation of business logic such as approvals, task and notifications?",
//         optionA:[ "a)       Process Automation> active flows
//      "b)      process automation> flow administration
//      "c)       process automation> process flow
//      "d)      process automation> workflow editor
//      "e)      process automation> flow designer
//     102.
// ],correct:"}, {
//     question: "What are the different types of data sources, ],correct:"},{  question:"Which may be imported into service now ? ", Choose 4 answers?",
//         optionA:[ "a)       implementation spoke
//      "b)      JDBC connection
//      "c)       DataHub
//      "d)      network server
//      "e)      LDAP connection
//      "f)        local sources (i.e., XML, CSV, excel)
//     103.
// ],correct:"}, {
//     question: "What are the examples of UI actions relating to forms?", Choose three answers ? ",
// optionA:[ "a)       form context menu
//      "b)      form columns
//      "c)       form links
//      "d)      form buttons
//      "e)      form View
//     104.
// ],correct:"}, {
//     question: "Which icon would you double Click to expand and collapse the list of all applications and modules?",
//         optionA:[ "a)       Funnel
//      "b)      Clock
//      "c)       Application
//      "d)      Star
//     105.                       on
// ],correct:"}, {
//     question: "What part of the service now instance, would you find the option to impersonate user?",
//         optionA:[ "a)       content frame
//      "b)      module
//      "c)       application navigator
//      "d)      banner
//     106.
// ],correct:"}, {
//     question: "What are the main components of the form design interface?", Choose 3 answers ? ",
// optionA:[ "a)       field picker
//      "b)      field layout
//      "c)       form layout
//      "d)      page header
//      "e)      field navigator
//     107.
// ],correct:"}, {
//     question: "What features are available in knowledge management to support continuous improvement on the knowledge articles?", Choose 4 answers ? ",
// optionA:[ "a)       flag article
//      "b)      tag as helpful
//      "c)       submit KB Errata
//      "d)      click frowning icon
//      "e)      Add comments
//      "f)        rate with stars
//     108.
// ],correct:"}, {
//     question: "When a custom table is created, ],correct:"},{  question:"Which access control rules are automatically created ? ", Choose 4 answers?",
//         optionA:[ "a)       Update
//      "b)      Execute
//      "c)       Create
//      "d)      Read
//      "e)      Delete
//      "f)        Write
//     109.
// ],correct:"}, {
//     question: "When you set a policy that is applied to all data entered into the platform (UI, import sets, or web services). ],correct:"},{  question:"Where does this policy required the Default ? ",
// optionA:[ "a)       Network
//      "b)      Server
//      "c)       Client
//      "d)      Browser
//     110.
// ],correct:"}, {
//     question: "Which tool is used to define relationship between fields in an imports Set table and a target table?",
//         optionA:[ "a)       schema map
//      "b)      transform schema
//      "c)       transform map
//      "d)      field transformer
//     111.                       How would you navigate to the schema map for a table ? ",
// optionA:[ "a)       system definitions> tables. select table. Go to related links and click show schema map
//      "b)      system dictionary> show schema map. select table
//      "c)       system definition> dictionary. select table. go to related links and click show schema map
//      "d)      system definition> show schema map. select table
//     112.
// ],correct:"}, {
//     question: "What feature allows you to limit users able to contribute or read knowledge within a knowledge base?",
//         optionA:[ "a)       Roles
//      "b)      user criteria
//      "c)       categories
//      "d)      groups
//     113.
// ],correct:"}, {
//     question: "What does natural language query allow you to do on a list?",
//         optionA:[ "a)       set list filter, using audible commands
//      "b)      filter list by typing in a phrase
//      "c)       predict the filter desired by the user
//      "d)      Speak to the condition builder
//      "e)      automatically select a filter based on keywords
//     114.                       your customer has a human resource knowledge base, ],correct:"}, {
//         question: "Which is only accessible to members of the human resource department. A new procedure regarding employee quarterly reviews needs to be published to the knowledge base but should be only visible to HR manager. how would you meet this requirement?",
//             optionA:[ "a)       Add user criteria for HR manager group on the can read list of the article
//      "b)      add user criteria for HR manager group on the categories can read list
//      "c)       on the knowledge article, add an access control for HR manager group on the can read list, then publish article to any category.
//      "d)      On the knowledge base, add user criteria with a manager can read script to the can read list, publish articles to any category
//     115.
// ],correct:"}, {
//     question: "What type of entitles can receive task assignments, in service now?", choose two answers ? ",
// optionA:[ "a)       Groups
//      "b)      Departments
//      "c)       Teams
//      "d)      Users
//     116.
// ],correct:"}, {
//     question: "What capability allows user to create dashboards with big widgets to visualise data over time in order to identify areas of improvement?",
//         optionA:[ "a)       Reporting
//      "b)      scheduled reports
//      "c)       analytics reports
//      "d)      performance analytics
//     117.
// ],correct:"}, {
//     question: "Which would you follow ],correct:"},{  question:"When testing a catalogue item that has a manager approval flow ? ", Choose three answers?",
//         optionA:[ "a)       make sure the latest flows are activated.
//      "b)      use the instance Incognito settings to quickly toggle between requester and approval
//      "c)       use your admin account, so you can approve the items quickly
//      "d)      impersonate the requester to ensure the form works
//      "e)      make sure the requesters user record as manager specified
//      "f)        Create and select your testing update set before starting the test cases.
//     118.
// ],correct:"}, {
//     question: "When designing a flow, how do you reference data from a record, in that flow?",
//         optionA:[ "a)       Use the condition builder to specify the desired values
//      "b)      drag the data pill onto the flow definition
//      "c)       add the table reference using the slush bucket
//      "d)      specify the source table on the data pill related list
//      "e)      drag the table icon onto the flow definition
//     119.                       after finishing your work on high security setting, ],correct:"}, {
//         question: "What is a possible way to return to normal admin security levels?",
//             optionA:[ "a)       Select global update set
//      "b)      end impersonation
//      "c)       use system administration> normal security module
//      "d)      select normal role
//      "e)      logout and back in
//     120.                       access controls are evaluated in this order: 1. Match Object against table ACL 2. Match The object against field ACL.Within step one above, ],correct:"}, {
//         question: "What order are the table ACLs evaluated?",
//             optionA:[ "a)       general to specific: table ACL, table.field ACL, parent table. field ACL
//      "b)      specific to general: table.field ACL, parent table.field ACL, * Field ACL
//      "c)       top to bottom: wildcard table ACL, parent table ACL, table ACL
//      "d)      bottom to top: table ACL, table. field ACL, parent table. field ACL
//      "e)      specific to general: table ACL, parent table ACL, wildcard(*) ACL
//     121.
// ],correct:"}, {
//     question: "When selecting the target table for an import, ],correct:"},{  question:"Which table can you select ? ", choose three answers?",
//         optionA:[ "a)       related tables, using dot walk
//      "b)      tables outside of servicenow
//      "c)       tables within the existing application scope
//      "d)      tables within the global scope
//      "e)      tables ],correct:"},{  question:"Which allow write access to other applications
//     122.                       A user wants to create a set of filter conditions, ],correct:"}, { question: "Where they want to show records ],correct:"},{  question:"Which satisfy two conditions: 1. incidents ],correct:"}, { question: "Where the state is closed, 2. incidents ],correct:"},{  question:"Where assignment group is network.after clicking the funnel icon, ],correct:"}, {
//         question: "What should the user do?",
//             optionA:[ "a)       define the first condition; click AND button; define second condition; click run
//      "b)      define the first condition; click OR button; define second condition; press enter
//      "c)       define the first condition; click> icon on breadcrumb, define second condition; press enter
//      "d)      define the first condition; click> icon on breadcrumb, define second condition; click run
//      "e)      define the first condition; click AND button; define second condition; press enter
//     123.
// ],correct:"}, {
//     question: "What import utility does the system use ],correct:"},{  question:"When the field names on the import set match the name of the fields on the target table ? ",
// optionA:[ "a)       scheme mapping
//      "b)      mapping assist tool
//      "c)       automatic mapping
//      "d)      mapping dashboard
//     124.                       Report designer contains different sections for configuring your report ],correct:"}, {
//         question: "Which section is used to adjust the look of your report, including colours, titles and legend layout?",
//             optionA:[ "a)       Format
//      "b)      Configure
//      "c)       Layout
//      "d)      Style
//     125.
// ],correct:"}, {
//     question: "Which statement correctly describes the difference between a client script and a business rule?",
//         optionA:[ "a)       Client scripting executes before a record is loaded and a business rule executes after a record is loaded
//      "b)      a client script executes on the server and a business rule executes on the client
//      "c)       a client script executes before a record is loaded and a business rule executes after a record is updated
//      "d)      a client script executes on the client and a business rule executes on the server
//     126.
// ],correct:"}, {
//     question: "What are the advantages of using flow designer?", choose three answers ? ",
// optionA:[ "a)       reduces technical debt
//      "b)      enables complicated scripting
//      "c)       less manual scripting
//      "d)      smooth integration with 3rd party system
//      "e)      supports advanced developers
//     127.
// ],correct:"}, {
//     question: "What tool is used to import data from various data sources and map that data into service now tables?",
//         optionA:[ "a)       Update set
//      "b)      data pack
//      "c)       import set
//      "d)      transform set
//     128.                       How would you distinguish between a base class table and a parent class table?",
//     optionA:[ "a)       extended tables can be extended from parent tables or base tables; but they cannot be extended from both.
//      "b)      base class table is not extended from another table. parent class tables may be extended from another table
//      "c)       base class tables always have tables extended from them. parent tables do not have tables extended from them
//      "d)      extended tables are always extended from parent tables. extended tables are usually extended from base tables
//     129.
// ],correct:"}, {
//     question: "What are three security modules often used by the System Administrator?", choose three answers ? ",
// optionA:[ "a)       system security> security
//      "b)      system properties> security
//      "c)       system security> high security settings
//      "d)      self-service> my access
//      "e)      system security> access control (ACL)
//     130.                       On a filter condition, ],correct:"}, {
//         question: "Which component is always a choice list?",
//             optionA:[ "a)       Operator
//      "b)      filter criteria
//      "c)       match criteria
//      "d)      operation
//     131.                       Many actions are included with the flow designer, ],correct:"}, {
//         question: "What are some frequently used core-actions?", choose four answers ? ",
// optionA:[ "a)       look for update
//      "b)      wait for condition
//      "c)       create record
//      "d)      look up record
//      "e)      ask for approval
//      "f)        wait for match
//     132.                       For your implementation, the following tables are extended from each other. 1) Incident table is extended from task table 2) super incident table is extended from incident table.in this situation, ],correct:"}, {
//         question: "Which tables are parent, child and base tables?", choose five answers ? ",
// optionA:[ "a)       super incident table is a parent table
//      "b)      super incident table is a child table
//      "c)       task table is a child table
//      "d)      super incident table is a base table
//      "e)      task table is a parent table
//      "f)        incident table is a base table
// g)       task table is a base table
// h)      incident table is a parent table
// i)        incident table is a child table
//     133.
// ],correct:"}, {
//     question: "Which is the most efficient way to move large amount of data between instances?",
//         optionA:[ "a)       Update sets
//      "b)      export to data package
//      "c)       export to zip
//      "d)      export to XML
//     134.
// ],correct:"}, {
//     question: "Which service now utility gives a service desk agent the ability to trace from a service Having an issue, to see ],correct:"},{  question:"Which Cis supporting that service have active issues ? ",
// optionA:[ "a)       CI health dashboard
//      "b)      event management homepage
//      "c)       service dashboard
//      "d)      CI dependency view
//     135.
// ],correct:"}, {
//     question: "When importing spreadsheet data into service now, ],correct:"},{  question:"What is the first step in the process ? ",
// optionA:[ "a)       select coalesce
//      "b)      select import set
//      "c)       define data source
//      "d)      run data scrabber
//      "e)      load data
//     136.
// ],correct:"}, { question: "When managing tags, you can adjust ],correct:"},{  question:"Who is able to see it. ],correct:"}, {
//     question: "What are the visibility options?", choose three answers ? ",
// optionA:[ "a)       Everyone
//      "b)      groups and users
//      "c)       me
//      "d)      Admins
//      "e)      Roles and permissions
//     137.
// ],correct:"}, {
//     question: "Which modules can you use to create a new table?", choose two answers ? ",
// optionA:[ "a)       tables and columns
//      "b)      dictionary
//      "c)       schema map
//      "d)      tables
//     138.
// ],correct:"}, {
//     question: "What service now feature allows you to include data from a secondary related table on a report?",
//         optionA:[ "a)       outer join
//      "b)      joins
//      "c)       SQL
//      "d)      dot walking
//     139.
// ],correct:"}, {
//     question: "Which of the following are not included in an update set by default?", Choose 3 Answers ? ",
// optionA:[ "a)       Business rules
//      "b)      Schedules
//      "c)       scheduled jobs
//      "d)      transcripts
//      "e)      home pages
//      "f)        data
//     140.
// ],correct:"}, {
//     question: "What options can you see, ],correct:"},{  question:"When you right click on a CI, from the CI dependency view map ? ", choose three answers?",
//         optionA:[ "a)       view affected Cis
//      "b)      view cases
//      "c)       view related tasks
//      "d)      view recent outages
//      "e)      view knowledge
//     141.                       you have heard about a new application released by service now.you want to try it out, to see if it might be useful for your company’s service now implementation. ],correct:"}, {
//         question: "What would be the best way to get hands on experience with the new application?",
//             optionA:[ "a)       active the application plug in, on your personal dev instance
//      "b)      check the latest release notes on docs.servicenow.com
//      "c)       search the wiki for sales demo request form
//      "d)      Activate the application plug in, on your company’s production instance.
//     142.                       On a filter condition, there is an element, ],correct:"}, {
//         question: "Which is based on the table, the user access rights, and column on the table. ],correct:"},{  question:"What is this element called ? ",
// optionA:[ "a)       Column
//      "b)      Field
//      "c)       data element
//      "d)      attribute
//      "e)      label
//     143.
// ],correct:"}, {
//     question: "Which module would you use to customize your instance banner image, text and colours?",
//         optionA:[ "a)       service portal> portals> branding
//      "b)      system properties> basic configuration UI16
//      "c)       system UI> UI pages> branding
//      "d)      home page admin> pages> branding
//      "e)      system properties> branding
//     144.
// ],correct:"}, {
//     question: "Which service now capability provides assistance to help users obtain information, make decisions and perform common work task via messaging interface?",
//         optionA:[ "a)       Knowledge chat

//      "b)      virtual agent
//      "c)       now support
//      "d)      chat box
//      "e)      agent workspace
//     145.                       service now contains over 25 different report types. ],correct:"}, {
//         question: "What are some of the types?", choose five answers ? ",
// optionA:[ "a)       Semi-donut
//      "b)      Speedometer
//      "c)       Donut
//      "d)      Thermometer
//      "e)      Pie
//      "f)        Horizontal Bar
// g) Odometer
//     146.                       On the CI dependency view, ],correct:"}, {
//         question: "What enables you to trace from an infrastructure item, like a server, to the server that dependent on that server?",
//             optionA:[ "a)       Transform app
//      "b)      Relationships
//      "c)       automapping utility
//      "d)      service tracer
//     147.
// ],correct:"}, {
//     question: "Which one statement correctly describes access control rule evalution?",
//         optionA:[ "a)       roles are evaluated from the general to specific, so a table rule must be active to continue.
//      "b)      if a row level rule and a field level rule exist, both rules must be true before an operation is allowed
//      "c)       rules are evaluated using roles. the role with the most permissions evaluates the rules first
//      "d)      if more than one rules applies to a row, the older rule is evaluated first
//     148.
// ],correct:"}, {
//     question: "Which one of the following describe the primary operations performed against tables in the service now platform?",
//         optionA:[ "a)       create, read, upload, delete
//      "b)      capture, rate, write, develop
//      "c)       create, rate, update, delete
//      "d)      create, read, write, delete
//     149.
// ],correct:"}, {
//     question: "What are advantages of using spokes for integration?", Choose 3 answers ? ",
// optionA:[ "a)        free spokes are available in the ServiceNow store
//      "b)      reduces the need for code
//      "c)       features scale and control mechanism
//      "d)      ensures discoverability and reuse
//      "e)      automated event management
//     150.
// ],correct:"}, {
//     question: "When looking at a long list of records, you want to quickly filter, to show only those ],correct:"},{  question:"Which have short description containing email.how might you do that ? ",
// optionA:[ "a)       on search box, select text, type email, click enter
//      "b)      click list magnifier to expand column search, on short description, type email, click enter
//      "c)       click list magnifier to expand column search, on short description, type %email, click enter
//      "d)      click list magnifier to expand column search, on short description, type *email, click enter
//     151.                       a task worker asks how they can monitor any updates occurring to records assigned to him, like responses from customers. ],correct:"}, {
//         question: "What do you suggest?",
//             optionA:[ "a)       on my work list, select activity stream icon to show a frame with live updates
//      "b)      select service desk> my work dashboard
//      "c)       open an agent workspace tab for each record he wants to monitor
//      "d)      click on the eyeglass icon to expand the monitor frame
//     152.                       you have an existing customer, ],correct:"}, {
//         question: "Who is using work floors for their catalog item. Existing purchasing policies to require approval for any request that totals over $1000. However, management wants to change the approval threshold to $1500. ],correct:"},{  question:"Which workflow would you update to make this change ? ",
// optionA:[ "a)       service approval processing
//      "b)      purchasing process flow
//      "c)       service catalog request
//      "d)      service catalog item request
//     153.                       after you create a new table, ],correct:"}, {
//         question: "What is the best practice regarding the navigation pane?", Choose 2 answers ? ",
// optionA:[ "a)       create application menu with the same name as the table label
//      "b)      set the font style on both the application menu and the module
//      "c)       specify ],correct:"},{  question:"Which roles are able to see the module
//      "d)      set the filter condition on the application module
//      "e)      Create module with the plural of the table label
//      "f)        specify ],correct:"},{  question:"Which roles are able to see the application menu
//     154.
// ],correct:"}, {
//     question: "What Icon do you use to change the label on your favorite?",
//         optionA:[ "a)       Triangle
//      "b)      Star
//      "c)       Clock
//      "d)      Pencil
//     155.
// ],correct:"}, {
//     question: "What is the platform name for the group table?",
//         optionA:[ "a)       Group
//      "b)      Sys_user_group
//      "c)       Sys_group
//      "d)      Sys_groups
//     156.                       from a form, ],correct:"}, {
//         question: "What would you Click to modify the order of the fields on the form?", Choose 2 answers ? ",
// optionA:[ "a)       context menu> configure> form layout
//      "b)      context menu> configure> form designer
//      "c)       right click on header> configure> form design
//      "d)      context menu> form> layout
//      "e)      right click on header> configure>UX dashboard
//     157.                       On access control definitions, ],correct:"}, {
//         question: "What are ways you can set the permissions on a table?", Choose 3 answers ? ",
// optionA:[ "a)       Groups
//      "b)      Roles
//      "c)       script that sets the answer variable to true or false
//      "d)      CRUD
//      "e)      conditional expressions
//     158.
// ],correct:"}, {
//     question: "What is used to determine user access to knowledge bases or a knowledge article?",
//         optionA:[ "a)       read access flag
//      "b)      privacy settings
//      "c)       user criteria
//      "d)      sn_kb_read, sn_article_read
//     159.
// ],correct:"}, {
//     question: "What is the result of the order in ],correct:"},{  question:"Which access controls are evaluated ? ",
// optionA:[ "a)       Ensures user has access to the application, before evaluating access to a module within the application
//      "b)      ensures user has access to the fields in a table, before considering their access to the table
//      "c)       Ensures user has access to a table, before evaluating access to a field in the table
//      "d)      ensures user can get to work as quickly as possible.
//     160.
// ],correct:"}, {
//     question: "What is a no-code approach to control the mandatory or read only state of a form field?",
//         optionA:[ "a)       Client script
//      "b)      UI action
//      "c)       UI policy
//      "d)      UI Rule
//      "e)      UI Script
//     161.
// ],correct:"}, {
//     question: "Which module is used as the first step for importing data?",
//         optionA:[ "a)       Transform data
//      "b)      coalesce data
//      "c)       Load data
//      "d)      import data
//     162.
// ],correct:"}, {
//     question: "Which tool graphically displays an infrastructure view for a configuration item (CI) and Its relationship with the other CIs?",
//         optionA:[ "a)       Schema map
//      "b)      dependency view
//      "c)       dependency map
//      "d)      database view
//     163.                       Group records are stored in ],correct:"}, {
//         question: "Which table?",
//             optionA:[ "a)       Group[sys_user_group],correct:"
//      "b)      Group[s_sys_group],correct:"
//      "c)       Group[u_sys_group],correct:"
//      "d)      Group[sn_sys_group],correct:"
//     164.
// ],correct:"}, {
//     question: "What is the most common role that has access to almost all platform features, Functions and data?",
//         optionA:[ "a)       security admin[security_admin],correct:"
//      "b)      System Administrator[admin],correct:"
//      "c)       Sys admin[sys_admin],correct:"
//      "d)      Admin[sn_admin],correct:"
//      "e)      Base admin[base_admin],correct:"
//     165.
// ],correct:"}, {
//     question: "What service now features can be triggered by events, and is used to inform users about activities or updates in service now?",
//         optionA:[ "a)       Emails
//      "b)      Texts
//      "c)       Alerts
//      "d)      Events
//      "e)      Notifications
//     166.                       The serviceNow platform includes
// ],correct:"}, {
//     question: "Which type of interfaces?", Choose 3 answers ? ",
// optionA:[ "a)       black office dashboard
//      "b)      Now mobile apps
//      "c)       service portals
//      "d)      field service task board
//      "e)      now platform user interfaces
//      "f)        agent Control Center
//     167.                       An IT manager is responsible for the network and hardware assignment groups, each group contains 5 team members.These team members are working on many tasks, but the manager cannot see any tasks on the service desk > My Groups Work List. ],correct:"}, {
//         question: "What could explain this?",
//             optionA:[ "a)       the manager is not a member of the network and hardware groups.
//      "b)      the assignment group manager field is empty.
//      "c)       the manager is not a member of the service desk group
//      "d)      the manager does not have the ITIL role.
//     168.                       You are showing your customer a new form that you have created for their new application.they would like to add a field to the form. ],correct:"}, {
//         question: "Where could you do that?", Choose 2 answers ? ",
// optionA:[ "a)       select fields and columns module
//      "b)      select field class manager module
//      "c)       click on context menu, select configure > form design
//      "d)      right click on the form header, select configure > form layout
//     169.                       A role is defined as ],correct:"}, {
//         question: "What?",
//             optionA:[ "a)       A persona in a workflow
//      "b)      a set of user access policies
//      "c)       a collection of permissions
//      "d)      a set of access control rules
//     170.
// ],correct:"}, {
//     question: "Which application is used primarily to load data into service now?",
//         optionA:[ "a)       data import configuration
//      "b)      system import sets
//      "c)       import management
//      "d)      import hub
//     171.
// ],correct:"}, {
//     question: "What are the three key tables in an enterprise CMDB?", Choose 3 answers ? ",
// optionA:[ "a)       Sn_cmdb_bak
//      "b)      Sn_cmdb_ci
//      "c)       Cmdb_rel_ci
//      "d)      Cmdb_bak
//      "e)      Cmdb_ci
//      "f)        Cmdb
// g) Sn_cmdb
//     172.                       How would you define an access control, to allow a user with itil role to have permission to create incident records ? ",
// optionA:[ "a)       Name: incident.none; operation: create; role: itil
//      "b)      Name: incident. *; operation: write; Permission: itil
//      "c)       Name: incident.none; permission: create; role: itil
//      "d)      Name: incident. *; Permission: write; role: itil
//      "e)      Name: incident.Any; operation: write; Permission: itil
//     173.
// ],correct:"}, {
//     question: "What do you activate ],correct:"},{  question:"When you want to add applications or functionality within your development instance ? ",
// optionA:[ "a)       Patch
//      "b)      app updated set
//      "c)       app package
//      "d)      plugin
//      "e)      updated pack
//     174.                       from a form, ],correct:"}, {
//         question: "What would you Click to add additional fields to the form?", Choose 2 answers ? ",
// optionA:[ "a)       right click on header > add > field
//      "b)      context menu > form > layout
//      "c)       context menu > configure > form design
//      "d)      context menu > configure > Form layout
//      "e)      context menu > form > designer
//      "f)        right click on header > configure > UX dashboard
//     175.
// ],correct:"}, {
//     question: "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
//         optionA:[ "a)       scenario dashboard
//      "b)      how much service data model (CSDM) Product View
//      "c)       CMDB Use Case Modeler
//      "d)      CI Use Case Modeler
//     176.                       service now contains a resource
// ],correct:"}, {
//     question: "Which provides the following: 1) A standard and shared set of service related definition across service now products and platforms that will enable and support true service level reporting. 2) A CMDB framework across our products and platforms that will enable and support multiple configuration strategies. ],correct:"},{  question:"What resource do these statements describe ? ",
// optionA:[ "a)       information technology infrastructure library (ITIL)
//      "b)      configuration management database (CMD"b)
//      "c)       common service data model (CSDM)
//      "d)      information technology service management (ITSM)
//     177.                       you are asked to create an option in the service catalog, ],correct:"}, { question: "Which will allow a user to click get help and describe the issue they are having. these forms should create incident records, ],correct:"},{  question:"Which are automatically routed to the service desk, ],correct:"}, {
//         question: "Which method would you use?",
//             optionA:[ "a)       create record producer
//      "b)      create content item
//      "c)       create catalog item
//      "d)      create order guide
//     178.
// ],correct:"}, {
//     question: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
//         optionA:[ "a)       natural language query
//      "b)      Alexa query
//      "c)       auto suggest query
//      "d)      machine learning query
//      "e)      predictive intelligence query
//     179.
// ],correct:"}, {
//     question: "What is the best practice related to using the default update set for moving customization and instances?",
//         optionA:[ "a)       you should not use the default update sets for moving between instances
//      "b)      keep default updates set to maximum of 20 records, for troubleshooting purposes.
//      "c)       submit default updates set to application repository 
//      "d)      merge default update sets before moving between instances
//     180.
// ],correct:"}, {
//     question: "What is the name of the table relationship, ],correct:"},{  question:"Where two or more tables are related in a bidirectional relationship, so that the related records are visible from both tables in a related list ? ",
// optionA:[ "a)       Database view
//      "b)      Extended
//      "c)       many to many
//      "d)      one to many
//     181.
// ],correct:"}, {
//     question: "What function do you use to add buttons, links, and context menu items on forms and list?",
//         optionA:[ "a)       UI policies
//      "b)      UI actions
//      "c)       UI settings
//      "d)      UI config
//     182.
// ],correct:"}, {
//     question: "What feature do you use to specify ],correct:"},{  question:"Which users are you able to access a service catalog item ? ",
// optionA:[ "a)       Can order tab.
//      "b)      catalog user role
//      "c)       can read role
//      "d)      User criteria
//     183.                       Tables may have a one - to - many relationship.from the service catalog, ],correct:"}, {
//         question: "What are examples of tables having a one-to-many relationship?", Choose 3 answers ? ",
// optionA:[ "a)       one cart can have many requests
//      "b)      one request can have many requested items
//      "c)       one approval can have many requests
//      "d)      one requested item can have many approvals
//      "e)      one requested item can have many catalog tasks
//     184.                       On a form header, ],correct:"}, {
//         question: "What is the three-bar icon called?",
//             optionA:[ "a)       hamburger icon
//      "b)      pancake icon
//      "c)       cake icon
//      "d)      additional actions or context menu
//     185.                       a user is complaining that they are seeing a blank page, ],correct:"}, {
//         question: "When they click create new, from your custom inventory application. you have confirmed that they can see the inventory application, and the create new module on the application navigator. ],correct:"},{  question:"What could be the cause of this issue ? ",
// optionA:[ "a)       create new module has a broken link
//      "b)      user should be using Chrome instead of explorer for their browser.
//      "c)       user has read role, but not the write role on the inventory table
//      "d)      known intermittent issues with UI15
//      "e)      user session has timed out
//     186.
// ],correct:"}, {
//     question: "Which service now capability allows you to provide knowledge articles, via a conventional messaging interface?",
//         optionA:[ "a)       Virtual agent
//      "b)      now messenger
//      "c)       agent assist
//      "d)      connect agent
//     187.
// ],correct:"}, {
//     question: "When moving multiple update sets at one time, ],correct:"},{  question:"What might you do to facilitate the move ? ",
// optionA:[ "a)       Preview
//      "b)      Test
//      "c)       Batch
//      "d)      Verify
//     188.
// ],correct:"}, {
//     question: "What are the components that make up a filter condition?", Choose 3 answers ? ",
// optionA:[ "a)       Field
//      "b)      Column
//      "c)       Value
//      "d)      Operator
//      "e)      match criteria
//     189.
// ],correct:"}, {
//     question: "When impersonating a user for testing purpose, ],correct:"},{  question:"What is the best way to return the instance, logged in with in your user account ? ",
// optionA:[ "a)       logout and back in
//      "b)      turn your computer off and on again
//      "c)       clear browser cache
//      "d)      end impersonation
//     190.
// ],correct:"}, {
//     question: "What type of field has a drop down list, from ],correct:"},{  question:"Which you can pick from predefined options ? ",
// optionA:[ "a)       drop down
//      "b)      option
//      "c)       choice
//      "d)      picker
//     191.                       a customer requests the following data quality measures to be added: 1. incident number should be read only on all list and forms, For all users. 2. short description field should be mandatory, on all records, across all applications, on insert. ],correct:"}, {
//         question: "Which type of policy would you use to meet this requirement?",
//             optionA:[ "a)       dictionary design policy
//      "b)      data quality policy
//      "c)       field criteria policy
//      "d)      data policy
//     192.                       User records are stored in ],correct:"}, {
//         question: "Which table?",
//             optionA:[ "a)       User[sys_user],correct:"
//      "b)      User[sn_user],correct:"
//      "c)       User[u_sys_user],correct:"
//      "d)      User[s_user],correct:"
//     193.                       Your Customer would like to create a new templates to notify users
// ],correct:"}, {
//     question: "Who are affected by network outage at their site. ],correct:"},{  question:"Which module would you use to create a new notification ? ",
// optionA:[ "a)       system properties > email > settings
//      "b)      administration > notification overview
//      "c)       user preferences > email > notifications
//      "d)      system notification > email > notifications
//      "e)      click gear > notifications > new
//     194.                       Two departments(HR onboarding and facilities) have come to you, asking for a way for employees to request event room setup services.The requirements are the same for the form and the task routing to the facilities assignment group. 1) For HR, the item will be used primarily for the onboarding condition, for employees orientation sessions. 2) for facilities, the item will be used for anyone in the company
// ],correct:"}, {
//     question: "Who needs room setup services.  However, both departments have their own service catalogs. ],correct:"},{  question:"What do you do, to support these requirements ? ",
// optionA:[ "a)       create one catalog item for event room setup; then use ACLs to control access.
//      "b)      create one catalog item for HR event room setup and one for facilities even room setup; then publish each to the appropriate catalog
//      "c)       create one catalog item for event room setup; then publish to the parent catalogue, ],correct:"},{  question:"Which is accessible to both HR and facilities.
//          "d)      create one catalogue item for event room setup; then publish to both catalogs.


// ],correct:"
