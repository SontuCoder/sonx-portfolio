---
title: "Multi-Document Loan Application — UiPath Dispatcher & Performer"
slug: "multi-document-loan-app-uipath"
description: "End-to-end UiPath REFramework automation that extracts multi-document loan applications, creates Orchestrator queue transactions, and processes those transactions through a reliable Performer workflow."

cover: "/projects/multi-document-loan-app/cover.webp"

gallery:
    - "/projects/multi-document-loan-app/dispatcher.webp"
    - "/projects/multi-document-loan-app/performer.webp"

featured: true
order: 2
published: false

category:
    - Automation
    - UiPath Action Center
    - Document Understanding

status: "Completed"

startDate: "2026-06-25"
endDate: null

role: "Automation Developer – RPA"
team: "Solo"

technologies:
    - UiPath-icon
    - REFramework
    - Orchestrator
    - Document Understanding
    - Excel-icon
    - Database

links:
    github: "https://github.com/SontuCoder/Multi-Document-Loan-App-UiPath-Performer"
    live: ""

colors:
    primary: "--p1-color"

---

# Overview

The Multi-Document Loan Application is an end-to-end UiPath automation built using a Dispatcher–Performer architecture and REFramework.

The Dispatcher processes Aadhaar, PAN, Loan Application, and Salary Slip documents using Document Understanding, prepares the extracted information, and creates transactions in UiPath Orchestrator Queues.

For cases requiring human review, UiPath Action Center handles the Human-in-the-Loop validation. Once the human action is completed, the Performer resumes the transaction, retrieves the required data, validates the loan, and continues the downstream processing.

This separation of Dispatcher, Human-in-the-Loop validation, and Performer makes the solution modular, reliable, and scalable.

## Features

    - Dispatcher and Performer architecture
    - UiPath REFramework-based transaction processing
    - Multi-document loan application processing
    - Aadhaar, PAN, Salary Slip, Loan Application document processing
    - UiPath Action Center, Document Understanding, Orchestrator Queue, Storage Bucket integration
    - Orchestrator Assets and credential management
    - Loan validation and duplicate checking
    - Automated loan creation
    - Customer notification emails
    - Business and System Exception handling
    - Transaction logging and status managemen


## Challenges

   - Designing a reliable Dispatcher–Performer architecture.
   - Processing multiple document types for a single loan application.
   - Extracting and validating information from loan documents.
   - Passing transaction data reliably through Orchestrator Queues.
   - Managing document/output references through Storage Buckets.
   - Detecting duplicate loans before creating new records.
   - Maintaining reliable transaction execution using REFramework.

## Highlights

   - Built an end-to-end Dispatcher–Performer RPA architecture using REFramework.
   - Processed Aadhaar, PAN, Loan Application, and Salary Slip documents with Document Understanding.
   - Implemented Human-in-the-Loop validation using UiPath Action Center before Performer execution.
   - Created and processed reusable transactions through UiPath Orchestrator Queues.
   - Implemented duplicate-loan validation, Business Exception handling, and automated customer notifications.

## What I Learned

    - UiPath REFramework
    - Dispatcher–Performer architecture
    - Document Understanding
    - Multi-document processing
    - Orchestrator Queues
    - Action Center
    - Human-in-the-Loop workflows
    - Business Exceptions
    - System Exceptions
    - Transaction handling
    - Workflow modularity


## Future Improvements

    - Improve document extraction accuracy and validation.
    - Add more document types to the loan processing pipeline.
    - Add confidence-score-based document validation.