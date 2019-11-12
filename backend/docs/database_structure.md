# Table Structure

    The following is a working draft of need tables:

## TABLES 
    ## Sim
        - [] id
        - [] first_name
        - [] last_name
        - [] gender
        - [] orientation
        - [] fertility
        - [] **sim_traits** [separate table]
        - [] date of birth
        - [] lifestate
        - [] **health record** [separate table]
        - [] personality
        - [] address [FK from HOUSEHOLD]
        - [] **school record** [separate table]
        - [] **job history** [separate table]
        - [] **finances**  [separate table]
        - [] **relationships** [separate table]

        *** sim_traits
            

    ## Household
        - [] id 
        - [] address
        - [] **lot_traits** [separate table]
        - [] property value
        - [] surname
        - [] special rules
        - [] notes

    ## Randomizers
        - [] **create_a_sim** [separate table]
        - [] **create_a_household** [separate table]
        - [] **sim_traits** [separate table]
        - [] **lot_traits** [separate table]
        - [] **standard_ROS** [separate table]
        - [] **lot_decay_ROS** [separate table]
        - [] **health_strikes_ROS** [separate table]
        - [] **random_legacy_rolls** [separate table]

    ## Government
        - [] **court_records** [separate table]
        - [] **tax_records** [separate table]
        - [] **welfare_records** [separate table]
        - [] registered_businesses [FK from BUSINESSES]
        - [] **council_records** [separate table]
        - [] **program_records** [separate table]
        - [] **government_finances** [separate table]

    ## Businesses
        - [] id
        - [] business_name
        - [] owner [FK from SIM]
        - [] venue type
        - [] value
        - [] **employees** [ FK from job_history?]
        - [] **openings** [separate table]
        - [] **lot_traits** [separate table]
        - [] date_established
        - [] **finances** [separate table]

    ## Finances
        - [] **accounts** [separate table]
        - [] **loans** [separate table]
        - [] **insurance** [separate table]

    ##Dates
        - [] **calendar** [separate table]
        - [] **holidays** [separate table]
        - [] **rotation schedule** [separate table]
        - [] **events** [separate table]




    


