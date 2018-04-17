export class Release {
    key: string;
    name: string;

    // Word Doc Info
    // Basic Release Info
    releaseOwner = '';
    contactInfo = '';
    chmTicket = '';
    legacyRelease = '';
    angularRelease = '';
    apiRelease = '';
    internalToolsRelease = '';
    enrollmentServiceRelease = '';
    reportingServiceRelease = '';
    learningServiceRelease = '';

    // Script Info
    lmsMigrationScript = '';
    lmsProcChangesScript = '';
    lmsLogMigrationScript = '';
    lmsLogProcChangesScript = '';
    lmsReportSchemaScript = '';
    lmsReportProcChangesScript = '';
    lmsAuditChangesScript = '';
    lmsTriggersChangesScript = '';

    // Utility Info
    newUtilityName = '';
    newUtilitySchedule = '';

    constructor() { }
  }
