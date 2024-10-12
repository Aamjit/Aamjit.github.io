+++
title = 'RESTful programming in ABAP(RAP)'
date = 2024-10-12T19:09:13+05:30
description = "Experience how RAP revolutionizes SAP development with its powerful Domain, Behavior, and Service Models. This blogpost contains a step-by-step process to get yourself started with hands-on RAP development of a simple travel app, from scratch to a local OData served Fiori app."
image = "https://media.licdn.com/dms/image/v2/D4D12AQEGcScJbJ-_Fg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728737657645?e=1733961600&v=beta&t=T6X-XD0oSYApSZdYKJXKPP0b1-AMqKkXIAaSqFTbM8s"
draft = false
type = "post"
showTableOfContents = true
tags = ["sap", "abap", "rap", "btp"]
+++

## Introduction

The **ABAP RESTful Application Programming Model (RAP)** is an innovative framework that enables developers to build enterprise-ready, cloud-centric applications using the powerful ABAP language. It’s designed to streamline the development process, ensuring a consistent approach to creating both on-premise and cloud-based solutions. Let’s delve into what makes RAP an exciting development paradigm.

### The Foundation of RAP

RAP is built on three key pillars: **Domain Model**, **Behavior Model**, and **Service Model**. These three models work together to provide a cohesive and robust programming environment.

1. **Domain Model**: Defines the core business entities and their relationships. It leverages the ABAP language to create data models that are reusable and scalable.
2. **Behavior Model**: Specifies the business logic and operations that can be performed on the entities defined in the domain model. This includes CRUD (Create, Read, Update, Delete) operations and custom business logic.
3. **Service Model**: Exposes the functionality defined in the behavior model as RESTful services. This allows for easy integration with other systems and applications, enabling seamless interaction with the business logic.

## Getting Started with RAP

To begin working with RAP, developers need access to an SAP system that supports the framework. Here are the essential steps:

-   ### Set Up Your Environment

    First and foremost, make sure you have an SAP HANA trial account.

    You need a HANA BTP account to access SAP ABAP environment on cloud, follow the link for a quick guide on how to [Create free BTP account](https://developers.sap.com/tutorials/btp-free-tier-account.html#:~:text=Next-,Get%20an%20Account%20on%20SAP%20BTP%20to%20Try%20Out%20Free%20Tier%20Service%20Plans,-Beginner) and while doing so you need to [Setup ABAP environment on your BTP](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html#:~:text=Share-,Create%20an%20SAP%20BTP%20ABAP%20Environment%20Trial%20User,-Beginner). Then install [Eclipse](https://www.eclipse.org/downloads/) for your local development environment.

    Next connect your BTP cloud account with ADT on your eclipse. See here.

    Once you’re done setting up, and connected your ADT workspace to your BTP ABAP environment.

    Create a new Project: **Right-click System name in File explorer>New>ABAP Package**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQHwSpz1yrDLpw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728735448904?e=1733961600&v=beta&t=HbGbUSHBx27MRuIgdD7Zn1DfycJF-H28fQ5g-5ueTAc)

    Give a proper name and description and click on Next.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQHVk9M0mSX74g/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728735586469?e=1733961600&v=beta&t=ZuRZEufT0aYkXSXdmfZnpAKLjQ7Zwzn3rQd5eiixNhs)

    In your next step, if you’re using Trial account, you can choose **ZLOCAL** software component, or **HOME**, if you want to use default component and you’re connected to a different system.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQH9_QBxZpPw6g/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728735666428?e=1733961600&v=beta&t=wS0eMBVNjm3IxqiSQJrRjL688LGUqh6LC419YJ7IWrs)

    Next, create a new TR for your new application. Give it a meaningful description. Then click **Finish**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGPobHBKY1TEw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728735726666?e=1733961600&v=beta&t=__dUmdH6Wtp-rohER1alCMqG19eeS-f3NGGDep-jlPI)

    _Optional_: Add your new package to your **Favorite Packages** list in your eclipse workspace.

    Right Click on **Favorite Packages>Add Package>Type your package name** and click on OK.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGQDmAmAGkGew/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736125364?e=1733961600&v=beta&t=ihh9R00uwXsgokjrk8vNQG2w2X0NSS9zN0EGGNHZDQI)

    Voila, you’re done setting up your environment, now you can start developing your application.

-   ### Create Database Table

    Now let us start creating our application, Right-click on your package navigate to **New>Other ABAP Repository Object**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGQDmAmAGkGew/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736125364?e=1733961600&v=beta&t=ihh9R00uwXsgokjrk8vNQG2w2X0NSS9zN0EGGNHZDQI)

    Next, in the wizard search for Database Table and click next.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQE3Xnkav2yHgw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736407568?e=1733961600&v=beta&t=-6k2Ys6hyJiulZlLJpu1s9nLRNHqZZaGbnDyCXB-PZ0)

    Give it a name, in this case **ZXX_TRAVEL_A**, the letter **A** denotes that is an active table. We usually create two types of tables, Active and Draft table, which we will cover later.

    Click next, and save it in your TR.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQE5GEefwapVFA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736425603?e=1733961600&v=beta&t=IAJdvyxqeUvrAacoSOTWOgu05Y3W5IhOc8FJgEc7uN0)

    Lets define the fields, types and their semantics for our database table. Save, check and activate our table.

    ```
    @EndUserText.label : 'Travel App'
    @AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
    @AbapCatalog.tableCategory : #TRANSPARENT
    @AbapCatalog.deliveryClass : #A
    @AbapCatalog.dataMaintenance : #RESTRICTED

    define table ztest_travel_a {
        key client            : abap.clnt not null;
        key travel_id         : /dmo/travel_id not null;
        agency_id             : /dmo/agency_id;
        customer_id           : /dmo/customer_id;
        begin_date            : /dmo/begin_date;
        end_date              : /dmo/end_date;
        @Semantics.amount.currencyCode : 'ztest_travel_a.currency_code'
        booking_fee           : /dmo/booking_fee;
        @Semantics.amount.currencyCode : 'ztest_travel_a.currency_code'
        total_price           : /dmo/total_price;
        currency_code         : /dmo/currency_code;
        description           : /dmo/description;
        overall_status        : /dmo/overall_status;
        attachment            : /dmo/attachment;
        mime_type             : /dmo/mime_type;
        file_name             : /dmo/filename;
        created_by            : abp_creation_user;
        created_at            : abp_creation_tstmpl;
        local_last_changed_by : abp_locinst_lastchange_user;
        local_last_changed_at : abp_locinst_lastchange_tstmpl;
        last_changed_at       : abp_lastchange_tstmpl;
    }
    ```

-   ### Generating Views, Behaviors and Service

    Next we will let ADT generate our view entities(root, projection), Behavior definitions, service definitions and binding.

    Right-click on your Database table and select **Generate ABAP Repository Objects**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGpkcbKaCQpYQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736537593?e=1733961600&v=beta&t=Vrm-oqa6WpRfSf_qAzQeXpvBawqYeDnIVF-5vf37jMM)

    Next under ABAP Restful Application Programming Model, select OData UI Service and click next and in the next step type in your Package name.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGCHaFpAlZ8bw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736570158?e=1733961600&v=beta&t=teSIBU0bJxvRjmTG9u9FkT2VACk6qxNELz8iumrngjw)

    Next, we will configure all of our objects in the generator wizard.

    > IMPORTANT: Do not proceed until you have defined all properties of the objects.

    #### Business Object

    Inside the Data Model, we are prompted to give an alias for our CDS entity, you can also change the default entity name.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQEEddXybfa3EA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728739585702?e=1733961600&v=beta&t=ssLwbp85q6AQToRoLvs9i2vnOkL-cmXKZRQUaOO42Oc)

    Go the Behavior tab, this will automatically create our Behavior Definitions CDS object and notice that we are creating a behavior implementation class and a draft table, which I mentioned before.

    The class is where we will define and implement all the behavior events(create, read, update, delete), validations, determinations, actions, etc.

    The draft table will be used to store unrecognized data, meaning the data which is not yet updated to our database but as a draft data. A use case is when we are creating, updating or deleting a record where the data is stored in a draft and we haven’t yet saved it.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFNiL-1hm5QAw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736671099?e=1733961600&v=beta&t=yzyfw5NOB0Tq08nKk0-EQr_-QEZc1TdbiU3j5tmMCX8)

    #### Service Projection

    Next, we will define our Service Projection View and Projection Behavior, as we can see, the wizard has already generated the names for us, we can proceed or change the names according to our needs.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFa0Y_i1360Hg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736810313?e=1733961600&v=beta&t=7X5SZgGayyiq56f9Jh8xa-Nae4rVxsZ7JD6Gu1SxJWI)

    Similar to before, we are defining implementation class for our Service Projection.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGP-1t-a6gc7w/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736854016?e=1733961600&v=beta&t=o7nFkcLw-6AYevVKPFXetthfHwjbpi8GHEZ3mo4VMbM)

    #### Business Service

    Here, we will define our Service Definition name and Binding name. Change the naming accordingly or leave the defaut ones.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQH1GW547Yr5XA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736898486?e=1733961600&v=beta&t=wtJAreB3KD2jron-UlSEjPWTKSlazE30BZTOdXOW8Lk)

    Wizard automatically selects OData V4 as our default connection type.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQHgMeJov6w-UQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736922603?e=1733961600&v=beta&t=TKGYT-NsvVwxfrwQMpKjXGTh-fs2XmM7p0wothxJR2Q)

    Generation configuration is completed, we can proceed and click Next.

    #### Object List

    The next window shows all the objects that are listed for creation and a preview of the code that it will generate.

    Business Object Projection Layer acts as projection components for our root entity definitions under Business Object Layer.

    We can also notice a Metadata Extension annotation object, it is important to note that this object annotation corresponds to how each of our field in our view will be displayed or used a selection field when we run this service though a UI application like **Fiori**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGTEhzQ4QovDA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1728736954212?e=1733961600&v=beta&t=se23GI0SDEnZ1fyPNALHq14DweooJeNZ_fQeoSYJvgQ)

    Click Next, select our TR and wait for the artifacts generation to be completed.

-   ### Service Binding: Publishing

    By default, it should redirect to the service binding object, or you can navigate on your package for **Business Services>Service Bindings>ZUI_TEST_TRAVEL_A_O4(Binding name)**

    ![](https://media.licdn.com/dms/image/v2/D4D12AQGq6Rgn1HcNZQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728736995841?e=1733961600&v=beta&t=08OOr3wUFNs9Znh26dhmjIAV1X0GG6pguLxkIDCfPHQ)

    Now, we are going to publish our service. Click on the Publish icon and wait for the service to be published.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFVujYwdjpLDQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737067026?e=1733961600&v=beta&t=QiktJPF8MQEgCUzUtObRgGihzIT9BK5TPJ-N7RWaX6o)

    After successful publishing, we can see our app listed as below. Select it and click on **Preview**, if any error occurs, you can **Copy Fiori Elements App Preview URL** and open it in a browser.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQEgp0lpCzgKFQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737095628?e=1733961600&v=beta&t=fgxBud_F5l68Ch4jxZOLhsqO_o39hbYSNhlSgYZYj1Y)

    If all is well, you should get a page like this.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFPP-Is_tTqUw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737130173?e=1733961600&v=beta&t=9tOnZCrjxrKefDDjBDjv4ZaRwzsaXtSqVUTYAGOw6rQ)

    But hold on, we don’t have any data in our database table. Let’s add some data to our table.

-   ### Populate Database Table

    In order for us to populate our database table, we are going to need the help of a class. Let us create a new class, right-click the package and select new ABAP class and give it a meaningful name and description.

    Click Next and save it in our TR.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQEz0Tw4FCsvKQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737163722?e=1733961600&v=beta&t=4LhCjaEqKhV2Fl-lkXiscoYANMTiAxGtjBGyEmuOFIE)

    Now, let add some code to our Class.

    #### Definition

    Here, we make use of the interface **if_oo_adt_classrun**, Provides a light-weight solution for executing an ABAP program without launching the integrated SAP GUI. Furthermore, this feature enables you to display any kind of text and/or content of data into the Console View.

    We cannot execute normal class like how we do it in SAP GUI, as ABAP cloud environment has some restrictions.

    ```
    CLASS ztest_cl_populate_travel DEFINITION
      PUBLIC
      FINAL
      CREATE PUBLIC .

      PUBLIC SECTION.
        INTERFACES if_oo_adt_classrun.
      PROTECTED SECTION.
      PRIVATE SECTION.
    ENDCLASS.
    ```

    #### Implementation

    Insert the following logic to help us populate our table. Save, check and activate it.

    ```
    CLASS ztest_cl_populate_travel IMPLEMENTATION.
      METHOD if_oo_adt_classrun~main.
        DATA:
          attachment TYPE /dmo/attachment,
          file_name  TYPE /dmo/filename,
          mime_type  TYPE /dmo/mime_type.

    *   clear data
        DELETE FROM ztest_travel_a.

        "insert travel demo data"
        INSERT ztest_travel_a  FROM (    "give your database name"
            SELECT
              FROM /dmo/travel AS travel
              FIELDS
                travel~travel_id        AS travel_id,
                travel~agency_id        AS agency_id,
                travel~customer_id      AS customer_id,
                travel~begin_date       AS begin_date,
                travel~end_date         AS end_date,
                travel~booking_fee      AS booking_fee,
                travel~total_price      AS total_price,
                travel~currency_code    AS currency_code,
                travel~description      AS description,
                CASE travel~status    "[N(New) | P(Planned) | B(Booked) | X(Cancelled)]"
                  WHEN 'N' THEN 'O'
                  WHEN 'P' THEN 'O'
                  WHEN 'B' THEN 'A'
                  ELSE 'X'
                END                     AS overall_status,
                @attachment             AS attachment,
                @mime_type              AS mime_type,
                @file_name              AS file_name,
                travel~createdby        AS created_by,
                travel~createdat        AS created_at,
                travel~lastchangedby    AS last_changed_by,
                travel~lastchangedat    AS last_changed_at,
                travel~lastchangedat    AS local_last_changed_at
                ORDER BY travel_id UP TO 20 ROWS
          ).
        COMMIT WORK.
        out->write( |{ sy-dbcnt } Demo data generated for table ztest_travel_a. | ).
      ENDMETHOD.
    ENDCLASS.
    ```

    Next, select the dropdown on the run icon, and select **Run as>ABAP Application**.
    Or simply press **F9**.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQH_g8URj_lZcg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737270502?e=1733961600&v=beta&t=nT-rk1RW0ghZVEMLeMNgYJbljbqZkXjLFvTBPsNwQBw)

    We have successfully populated our table.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQHKEmvYt1bgzg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737357180?e=1733961600&v=beta&t=woCvH2fcv3TOl1WdfWdtPmDry8ZBm_b_yEVj_J4L2XI)

    Verify once by executing(F8) our database table.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFrqKr8kkB_Bw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737372350?e=1733961600&v=beta&t=Rgflh7OWPByFmJWqh3FTtvfQUYmx8yAyJukmCkncBig)

-   ### Fiori Preview

    Now go to our Service Binding again, reactivate the object or simply refresh the package.

    Open the preview URL again, and you should be able to see the data being loaded successfully.

    ![](https://media.licdn.com/dms/image/v2/D4D12AQFYVFSLaAf7Sg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1728737484961?e=1733961600&v=beta&t=TGh43773u1nQIM7-vxlikhFmEnLM2cwRLEU8qXPFrRA)

## Congratulations!

You have now created a SAP RAP application and you’re one step closer to your learning goals. You now have an idea of the process and structure of a RAP application.

There are many more topics that you must explore after this, as those are crucial for you to excel in your knowledge in RAP understanding.

I will list out few of them:

-   Enhance the Business Object Data Model and Enable OData Streams
-   Enhance the Business Object Behavior With Unmanaged Internal Numbering
-   Enhance the Business Object Behavior With Determinations
-   Enhance the Business Object Behavior With Validations
-   Create an SAP Fiori App and Deploy it to SAP BTP, ABAP Environment
-   Integrate List Report into ABAP Fiori Launchpad
-   Create SAP Fiori Launchpad Space and Page Templates
-   Enhance the Business Object Behavior With Instance Action
-   Enhance the Business Object Behavior With Factory Action
-   Enhance the Business Object Behavior With Dynamic Feature Control
-   Write an ABAP Unit Test for the RAP Business Object

Happy Learning!!!✌️✌️✌️
