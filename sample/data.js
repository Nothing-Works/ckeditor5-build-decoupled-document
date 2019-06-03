/* eslint no-unused-vars: "off"*/
const mergeFields = [
	{
		'name': 'Customer Globally Unique ID',
		'value': '{{customerModel:CustomerGuid}}'
	},
	{
		'name': 'Customer ID',
		'value': '{{customerModel:Id}}'
	},
	{
		'name': 'Customer Contact Type',
		'value': '{{customerModel:ContactType}}'
	},
	{
		'name': 'Customer Title',
		'value': '{{customerModel:ContactTitle}}'
	},
	{
		'name': 'Customer Initials',
		'value': '{{customerModel:ContactInitials}}'
	},
	{
		'name': 'Customer First Name',
		'value': '{{customerModel:ContactFirstName}}'
	},
	{
		'name': 'Customer Middle Names',
		'value': '{{customerModel:ContactMiddleNames}}'
	},
	{
		'name': 'Customer Last Name',
		'value': '{{customerModel:ContactLastName}}'
	},
	{
		'name': 'Customer Organisation Name',
		'value': '{{customerModel:ContactOrganisation}}'
	},
	{
		'name': 'Customer Letter Salutation',
		'value': '{{customerModel:ContactLetterTo}}'
	},
	{
		'name': 'Customer Envelope Salutation',
		'value': '{{customerModel:ContactSalutation}}'
	},
	{
		'name': 'Customer Region',
		'value': '{{customerModel:RegionType}}'
	},
	{
		'name': 'Customer Hone Phone',
		'value': '{{customerModel:HomePhone}}'
	},
	{
		'name': 'Customer Business Phone',
		'value': '{{customerModel:BusinessPhone}}'
	},
	{
		'name': 'Customer Mobile',
		'value': '{{customerModel:MobilePhone}}'
	},
	{
		'name': 'Customer Fax',
		'value': '{{customerModel:ContactFax}}'
	},
	{
		'name': 'Customer Skype',
		'value': '{{customerModel:ContactSkype}}'
	},
	{
		'name': 'Customer Website',
		'value': '{{customerModel:ContactWebsite}}'
	},
	{
		'name': 'Customer Email',
		'value': '{{customerModel:Email}}'
	},
	{
		'name': 'Customer Sourced',
		'value': '{{customerModel:SourcedType}}'
	},
	{
		'name': 'Customer Gender',
		'value': '{{customerModel:GenderType}}'
	},
	{
		'name': 'Customer Birth Date',
		'value': '{{customerModel:ContactBirthdate}}'
	},
	{
		'name': 'Customer Deceased Date',
		'value': '{{customerModel:ContactDeceasedDate}}'
	},
	{
		'name': 'Customer Facebook',
		'value': '{{customerModel:ContactFaceBook}}'
	},
	{
		'name': 'Customer LinkedIn',
		'value': '{{customerModel:ContactLinkedIn}}'
	},
	{
		'name': 'Customer Twitter',
		'value': '{{customerModel:ContactTwiter}}'
	},
	{
		'name': 'Customer Maiden Name',
		'value': '{{customerModel:ContactMaidenName}}'
	},
	{
		'name': 'Customer Marital Status',
		'value': '{{customerModel:MaritalStatusType}}'
	},
	{
		'name': 'Customer Ethnicity',
		'value': '{{customerModel:EthnicityType}}'
	},
	{
		'name': 'Customer Business Title',
		'value': '{{customerModel:BusinessTitleType}}'
	},
	{
		'name': 'Customer Occupation',
		'value': '{{customerModel:OccupationType}}'
	},
	{
		'name': 'Customer Branch',
		'value': '{{customerModel:BranchType}}'
	},
	{
		'name': 'Customer Department',
		'value': '{{customerModel:ContactDepartment}}'
	},
	{
		'name': 'Customer Bank',
		'value': '{{customerModel:DD_BankType}}'
	},
	{
		'name': 'Customer Branch',
		'value': '{{customerModel:DD_Branch}}'
	},
	{
		'name': 'Customer Account Name',
		'value': '{{customerModel:DD_AccountName}}'
	},
	{
		'name': 'Customer Account Number',
		'value': '{{customerModel:DD_AccountNumber}}'
	},
	{
		'name': 'Customer Credit Card Type',
		'value': '{{customerModel:CC_CardType}}'
	},
	{
		'name': 'Customer Credit Card Number',
		'value': '{{customerModel:CC_CardNumber}}'
	},
	{
		'name': 'Customer Credit Card Expiry Date',
		'value': '{{customerModel:CC_ExpireDate}}'
	},
	{
		'name': 'Customer Credit Card Holder',
		'value': '{{customerModel:CC_CardHolder}}'
	},
	{
		'name': 'Customer Postal Careof',
		'value': '{{customerModel:PostalAddressAddress0}}'
	},
	{
		'name': 'Customer Postal Address1',
		'value': '{{customerModel:PostalAddressAddress1}}'
	},
	{
		'name': 'Customer Postal Address2',
		'value': '{{customerModel:PostalAddressAddress2}}'
	},
	{
		'name': 'Customer Postal Address3',
		'value': '{{customerModel:PostalAddressAddress3}}'
	},
	{
		'name': 'Customer Postal Suburb',
		'value': '{{customerModel:PostalAddressSuburb}}'
	},
	{
		'name': 'Customer Postal City',
		'value': '{{customerModel:PostalAddressCity}}'
	},
	{
		'name': 'Customer Postal State',
		'value': '{{customerModel:PostalAddressState}}'
	},
	{
		'name': 'Customer Postal Postcode',
		'value': '{{customerModel:PostalAddressPostCode}}'
	},
	{
		'name': 'Customer Postal Country',
		'value': '{{customerModel:PostalAddressCountry}}'
	},
	{
		'name': 'Customer Postal DPID',
		'value': '{{customerModel:PostalAddressDPID}}'
	},
	{
		'name': 'Customer Delivery Careof',
		'value': '{{customerModel:PhysicalAddressAddress0}}'
	},
	{
		'name': 'Customer Delivery Address1',
		'value': '{{customerModel:PhysicalAddressAddress1}}'
	},
	{
		'name': 'Customer Delivery Address2',
		'value': '{{customerModel:PhysicalAddressAddress2}}'
	},
	{
		'name': 'Customer Delivery Address3',
		'value': '{{customerModel:PhysicalAddressAddress3}}'
	},
	{
		'name': 'Customer Delivery Suburb',
		'value': '{{customerModel:PhysicalAddressSuburb}}'
	},
	{
		'name': 'Customer Delivery City',
		'value': '{{customerModel:PhysicalAddressCity}}'
	},
	{
		'name': 'Customer Delivery State',
		'value': '{{customerModel:PhysicalAddressState}}'
	},
	{
		'name': 'Customer Delivery PostCode',
		'value': '{{customerModel:PhysicalAddressPostCode}}'
	},
	{
		'name': 'Customer Delivery Country',
		'value': '{{customerModel:PhysicalAddressCountry}}'
	},
	{
		'name': 'Customer Delivery DPID',
		'value': '{{customerModel:PhysicalAddressDPID}}'
	},
	{
		'name': 'Receipt Number',
		'value': '{{receiptModel:Receipts_ReceiptId}}'
	},
	{
		'name': 'Receipt Batch Number',
		'value': '{{receiptModel:Receipts_BatchId}}'
	},
	{
		'name': 'Receipt Date',
		'value': '{{receiptModel:Receipts_Date}}'
	},
	{
		'name': 'Receipt Payment Type',
		'value': '{{receiptModel:Receipts_PaymentType}}'
	},
	{
		'name': 'Receipt Credit Card Type',
		'value': '{{receiptModel:Receipts_CC_CardType}}'
	},
	{
		'name': 'Receipt Credit Card Holder',
		'value': '{{receiptModel:Receipts_CC_CardHolder}}'
	},
	{
		'name': 'Receipt Credit Card Number',
		'value': '{{receiptModel:Receipts_CC_CardNumber}}'
	},
	{
		'name': 'Receipt Credit Card Expiry',
		'value': '{{receiptModel:Receipts_CC_CardExpiry}}'
	},
	{
		'name': 'Receipt Credit Card Token',
		'value': '{{receiptModel:Receipts_CC_CardToken}}'
	},
	{
		'name': 'Receipt Credit Card Provider Reference',
		'value': '{{receiptModel:Receipts_CC_ProviderReference}}'
	},
	{
		'name': 'Receipt Credit Card Authority Number',
		'value': '{{receiptModel:Receipts_CC_AuthorityNumber}}'
	},
	{
		'name': 'Receipt Bank Type',
		'value': '{{receiptModel:Receipts_DD_BankType}}'
	},
	{
		'name': 'Receipt Branch Name',
		'value': '{{receiptModel:Receipts_DD_BranchName}}'
	},
	{
		'name': 'Receipt Drawer Name',
		'value': '{{receiptModel:Receipts_Ch_DrawerName}}'
	},
	{
		'name': 'Receipt Cheque Number',
		'value': '{{receiptModel:Receipts_Ch_ChequeNumber}}'
	},
	{
		'name': 'Receipt Description',
		'value': '{{receiptModel:Receipts_Description}}'
	},
	{
		'name': 'Product',
		'value': '{{receiptProductModel:ReceiptsProducts_Product}}'
	},
	{
		'name': 'Campaign',
		'value': '{{receiptProductModel:ReceiptsProducts_Campaign}}'
	},
	{
		'name': 'Units',
		'value': '{{receiptProductModel:ReceiptProducts_Units}}'
	},
	{
		'name': 'UnitTotal',
		'value': '{{receiptProductModel:ReceiptProducts_UnitTotal}}'
	},
	{
		'name': 'Discount',
		'value': '{{receiptProductModel:ReceiptProducts_Discount}}'
	},
	{
		'name': 'Tax',
		'value': '{{receiptProductModel:ReceiptProducts_Tax}}'
	},
	{
		'name': 'Total',
		'value': '{{receiptProductModel:ReceiptProducts_Total}}'
	}
];
