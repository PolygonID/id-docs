---
id: query-builder
title: Query Builder
sidebar_label: Query Builder
description: Learn how to use the Query Builder..
keywords: 
  - docs
  - polygon id
  - ID holder
  - issuer
  - verifier
  - query builder
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The [Query Builder](https://schema-builder.polygonid.me/query-builder) is an interactive way of creating verification queries through an intuitive form with all the fields a comprehensive query might have. 

Verifiers can create a set of rules that users need to meet to prove their identity using their existing credentials. These rules could range from being a member of a specific organization to being at a certain age. Polygon ID makes it easy and secure for users to prove their identity by using these rules for authentication purposes.

By providing a standardized interface for query creation, a user interface can help ensure that queries are created in a consistent, uniform and error-free way across different users and organizations. Also, rather than requiring users to learn the ZK query language, a user interface can serve as a more intuitive and user-friendly alternative to create queries. 

<div align="center">
<img src={useBaseUrl("/img/query-builder.png")} align="center" width="600"/>
</div>
<br></br>

The [Query Builder](https://schema-builder.polygonid.me/query-builder) contains the following fields:

- Proof type: credential issuance methods. SIG for Credentials with Baby JubJub(BJJ) Key Signatures and MTP for credentials with Merkle Tree Proof.
- URL to JSON-LD Context: this should be the address where the JSON-LD Context is stored, containing schema data.
- Schema Type: this is the field used to select the schema which the query is about, for credentials that have more than one schema type.
- Issuer DID: refers to the identification of the issuer that generated the credential. Use `*` to consider any issuers. **We currently support only one value**, which means that you can either choose one particular Issuer DID or use `*` to accept any.
- Attribute field: this is the attribute the query is based on. **Each query supports only one attribute**.
- Query type: the two options of queries that are available, a Condition or Selective disclosure. Condition depends on a value and an operator; that would be the case of a query requesting a user to be older than 21 years old. [Selective Disclosure](/docs/verifier/features.md#selective-disclosure) is the feature used to ask the ID holder for a specific piece of their data.
- Operator: this is the relation between the attribute and the value.
- Value: this is the value the operator refers to.
- Skip Revocation Check: will skip the check to see if a credential was revoked or not.

You can see here how these fields should be filled for a verifier who needs to **check whether the credential holder is older than 21 years old**:

<div align="center">
<img src={useBaseUrl("/img/query-builder-filled.png")} align="center" width="600"/>
</div>
<br></br>


The [Query Builder](https://schema-builder.polygonid.me/query-builder) outcome should look like this: 

<div align="center">
<img src={useBaseUrl("/img/query-builder-outcome.png")} align="center" width="600"/>
</div>
<br></br>


Then, one can copy and paste the snippet on the verifier API `GetAuthRequest()` function. 

:::info

The idea behind the Query Builder is to facilitate the query elaboration process by generating the whole section relative to "Request for specific proof" of the auth request endpoint code, as it can be seen on the [<ins>Run a Verifier tutorial</ins>](/docs/verifier/verification-library/verifier-set-up.md#verifier-server-setup), more specifically on point 3.
    
:::
