select * from estados e, cidades c where e.id = c.estado_id;

select * from estados e inner join cidades c on e.id = c.estado_id;