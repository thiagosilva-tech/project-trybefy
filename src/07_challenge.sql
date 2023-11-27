UPDATE users
SET plan_id = (
        SELECT id
        FROM plans
        WHERE name = 'Mensal'
    )
WHERE plan_id = (
        SELECT id
        FROM plans
        WHERE name = 'Trimestral'
    );

DELETE FROM plans WHERE name = 'Trimestral';